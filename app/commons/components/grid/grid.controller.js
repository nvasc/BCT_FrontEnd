import angular from 'angular';
import headerFilter from './header-filter.html';

function gridController($scope, $element, $attrs, $timeout, uiGridConstants,
  $http, oauthDataFactory) {
  var vm = this;
  vm.url = oauthDataFactory.urlMain() + $scope.url;
  $scope.data = [];

  function getColumns() {
    for (var i = 0; i < $scope.colDefs.length; i++) {
      if ($scope.colDefs[i].enableFiltering !== false &&
            angular.isUndefined($scope.colDefs[i].filterHeaderTemplate)) {
        $scope.colDefs[i].filterHeaderTemplate = headerFilter;
      }
    }
    return $scope.colDefs;
  }

  vm.gridOptions = {
    infiniteScrollDown: true,
    infiniteScrollUp: true,
    infiniteScrollRowsFromEnd: 40,
    enableColumnMenus: false,
    columnDefs: getColumns(),
    useExternalFiltering: true,
    onRegisterApi: function (gridApi) {

      gridApi.infiniteScroll.on.needLoadMoreData($scope, getDataDown);
      gridApi.infiniteScroll.on.needLoadMoreDataTop($scope, getDataUp);
      gridApi.core.on.sortChanged($scope, sortChanged);
      if ($scope.selectionRow) {
        gridApi.selection.on.rowSelectionChanged($scope, function (row) {
          $scope.selectionRow(row, false);
        });
        gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {
          $scope.selectionRow(rows, true);
        });
      }
      //gridApi.core.on.filterChanged($scope, filterChanged);
      vm.gridApi = gridApi;
    },
    data: 'data'
  };

  //---------------------paging----------------
  var pageSize = 50;
  var firstPage = 0;
  var lastPage = 0;
  var skip = 0;
  var take = pageSize;
  var total = 0;
  var aboutRemovePage = 5;

  function defaultData() {
    pageSize = 50;
    firstPage = 0;
    lastPage = 0;
    skip = 0;
    take = pageSize;
    total = 0;
    $scope.data = [];
  }
  var numberPage = function () {
    return (total / pageSize) + (total % pageSize > 0 ? 1 : 0);
  }

  function handleNextSkip(s) {
    if (s === 0) {
      skip = take + 1;
    } else {
      skip = s + take;
    }
  }

  function handlePreviousSkip(s) {
    if (s !== 0) {
      skip = s - take;
    }
  }

  function getFirstData() {
    return $http.post(vm.url, {
      Skip: skip,
      Take: take,
      OrderBys: getOrderBy(),
      Filters: getCondition()
    })
      .then(function (response) {
        var data = response.data.Data;
        total = response.data.Count;
        $scope.data = data;        
      });
  };

  function handlePageDown() {
    if (lastPage !== 0) {
      skip = (lastPage * take) + 1;
    }
    handleNextSkip(skip);
  }

  function getDataDown() {
    handlePageDown();
    return $http.post(vm.url, {
      Skip: skip,
      Take: take,
      OrderBys: getOrderBy(),
      Filters: getCondition()
    })
      .then(function (response) {
        lastPage++;
        var data = response.data.Data;
        vm.gridApi.infiniteScroll.saveScrollPercentage();
        $scope.data = $scope.data.concat(data);
        if ($scope.setDataItem) {
          $scope.setDataItem($scope.data);
        }
        return vm.gridApi.infiniteScroll.dataLoaded(firstPage > 0, lastPage < numberPage()).
        then(function () {
          checkDataLength('up');
        });
      })
      .catch(function (error) {
        return vm.gridApi.infiniteScroll.dataLoaded();
      });
  };

  function handlePageUp() {
    if (firstPage !== 0) {
      skip = (firstPage * take) + 1;
    }
    handlePreviousSkip(skip);
  }

  function getDataUp() {
    handlePageUp();
    return $http.post(vm.url, {
      Skip: skip,
      Take: take,
      OrderBys: getOrderBy(),
      Filters: getCondition()
    })
      .then(function (response) {
        var data = response.data.Data;
        firstPage--;
        vm.gridApi.infiniteScroll.saveScrollPercentage();

        $scope.data = data.concat($scope.data);
        if ($scope.setDataItem) {
          $scope.setDataItem($scope.data);
        }
        return vm.gridApi.infiniteScroll.dataLoaded(firstPage > 0, lastPage < numberPage())
          .then(function () {
            checkDataLength('down');
          });
      })
      .catch(function (error) {
        return vm.gridApi.infiniteScroll.dataLoaded();
      });
  };

  function checkDataLength(discardDirection) {
    // work out whether we need to discard a page, if so discard from the direction passed in
    if (lastPage - firstPage > aboutRemovePage) {
      // we want to remove a page
      vm.gridApi.infiniteScroll.saveScrollPercentage();
      if (discardDirection === 'up') {
        $scope.data = $scope.data.slice(pageSize);
        firstPage++;
        $timeout(function () {
          // wait for grid to ingest data changes
          vm.gridApi.infiniteScroll.dataRemovedTop(firstPage > 0, lastPage < numberPage());
        });
      } else {
        $scope.data = $scope.data.slice(0, total);
        lastPage--;
        $timeout(function () {
          // wait for grid to ingest data changes
          vm.gridApi.infiniteScroll.dataRemovedBottom(firstPage > 0, lastPage < numberPage());
        });
      }
    }
  };

  function runFirst() {
    getFirstData().then(function () {
      $timeout(function () {
        // timeout needed to allow digest cycle to complete,and grid to finish ingesting the data
        // you need to call resetData once you've loaded your data if you want to enable scroll up,
        // it adjusts the scroll position down one pixel so that we can generate scroll up events
        vm.gridApi.infiniteScroll.resetScroll(firstPage > 0, lastPage < numberPage());
      });
    });
  }
  //OrderBy -------------------------------
  var orderByObj = null;

  function getOrderBy() {
    if (orderByObj) {
      return [ orderByObj ];
    }
    return [];
  }

  function sortChanged(grid, sortColumns) {
    orderByObj = null;
    if (sortColumns.length !== 0) {
      switch (sortColumns[0].sort.direction) {
        case uiGridConstants.ASC:
          orderByObj = {
            IsDescending: false,
            Field: sortColumns[0].name
          };
          break;
        case uiGridConstants.DESC:
          orderByObj = {
            IsDescending: true,
            Field: sortColumns[0].name
          };
          break;
      }
    }
    defaultData();
    runFirst();
  }
  //----------------------Filter-------------------------------
  if ($scope.watchFilter) {
    $scope.watchFilter();
  }
  $scope.watchFilter = $scope.$watch('ciFilter', function (nval, oval) {
    if (nval !== oval) {
      vm.gridOptions.enableFiltering = nval;
      vm.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
    }
  });

  //Map enter
  vm.mapEnter = function (e, colFilter) {
    var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
    
    if (key === 13) {
      runFirst();
      // if (colFilter.filterContent && colFilter.filterContent !== null && 
      //   colFilter.filterContent !== '') {
        
      // }            
    }    
  }
 //Operator: Or = 0, And = 1, Not = 2
//Condition: 
// Content = 0,
// StartWith = 1,
// EndWith = 2,
// Equals = 3,
// DoesNotEqual = 4,
// GreaterThan = 5,
// GreaterThanOrEqual = 6,
// LessThan = 7,
// LessThanOrEqual = 8,
//DataType: String = 0, Number = 1, Date = 2, Boolean = 3

  function getCondition() {
    var filters = [];
    var filter = { Clauses: [], Op: 0 };
    var clauses = [];
    var clause = { Operation: {}, Op: 0 };
    var operation = { Condition: 1, DataType: 0,  Field: '', Value: '' };
    if (vm.gridApi && vm.gridApi.grid) {
      var grid = vm.gridApi.grid;
      for (var i = 0; i < grid.columns.length; i++) {
        var col = grid.columns[i];
        var filter = col.filters[0];        
        if (angular.isDefined(filter.term) && filter.term !== null &&  filter.term !== '') {
          operation = { 
            Condition: getConditionByDataType(col.colDef.dataType), 
            DataType: !col.colDef.dataType ? 0 : col.colDef.dataType,  
            Field: col.field, 
            Value: filter.term 
          };
          clause.Operation = angular.copy(operation);
          clauses.push(clause)
        }
      }
      if (clauses.length > 0) {
        filter.Clauses = angular.copy(clauses);
        filters.push(filter)
      }
    }
    return filters.length === 0 ? null : filters;
  }

  function getConditionByDataType(datatype) {
    switch (datatype) {
      case 1: 
      case 2:
      case 3:
        return 3;
    }  
    return 0;
  }

  //----------set this scope for parent--------
  $scope.refresh = function () {
    runFirst();
  }
  //----------------------init-----------------
  function resize() {
    $timeout(function () {
      var heightPx = $('.auto-of-content .box-body').css('min-height');
      var height = parseInt(heightPx.replace('px', '')) - 25;
      $('#client-grid').css('height', height);
      vm.gridApi.core.handleWindowResize();
    })
  }

  function init() {
    $scope.ciSetScope($scope);
    $(window, '.content-wrapper').resize(function () {
      resize();
    });
    $timeout(function () {
      $.AdminLTE.callbackPushMenu = function () {
        $timeout(function () {
          vm.gridApi.core.handleWindowResize();
        }, 510)
      }
    })
    resize();
    runFirst();
  }
  init();
}

/* @ngInject */
export default gridController;
