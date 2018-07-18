import _ from 'lodash';

function selectController($q, $scope, $element, $attrs, $timeout,
  $http, oauthDataFactory) {
  var vm = this;
  var msg = {
    SelectTextStart: '--- Chọn ---',
  }
  if ($scope.ngModel === 0) {
    $scope.ngModel = '0';
  }
  var url = oauthDataFactory.urlMain() + $scope.url;
  var _getCondition = function (seachText) {
    var filters = [];
    var filter = {
      Clauses: [],
      Op: 0
    };
    var clauses = [];
    var clause = {
      Operation: {},
      Op: 0
    };
    var operation = {
      Condition: 1,
      DataType: 0,
      Field: '',
      Value: ''
    };
    if (angular.isDefined(seachText) && seachText !== null && seachText !== '') {
      operation = {
        Condition: 0,
        DataType: 0,
        Field: 'Text',
        Value: seachText
      };
      clause.Operation = angular.copy(operation);
      clauses.push(clause)
      filter.Clauses = angular.copy(clauses);
      filters.push(filter)
      return filters;
    }
    return [];
  }
  var _control = $element.find('select#' + $scope.ciId);

  
  $scope.$watch($attrs.disabled, function () {
    if ($attrs.disabled) {
      _control.attr('disabled', $attrs.disabled);
    }
  });

  $scope.$watch('select.dataSelected', function (nval, oval) {
    //console.log(nval, oval);
  });

  function formatResult(item) {
    var $result = $('<span style="padding-left:' + (10 * parseInt(item.level)) +
      'px;">' + item.text + '</span>');
    return $result;
  };

  function initSelection() {
    if ($scope.ngModel !== '0') {
      var filter = {};
      filter.Skip = 0;
      filter.Take = 50;
      filter.OrderBys = [];
      filter.Filters = [];    
      
      if (_.isArray($scope.ngModel)) {
        var result = [];
        for (var i = 0; i < $scope.ngModel.length; i++) {
          result.push($scope.ngModel[i] + '');
        }
        filter.QueryIds = result;
      } else {
        filter.QueryId = $scope.ngModel;
      }
           
      $http.post(url, filter).then(function (resp) {
        var datas = resp.data.Data;
        for (var j = 0; j < datas.length; j++) {
          var itemData = {id: datas[j].Id + '', text: datas[j].Text, level: datas[j].Level};
          if (_.isArray($scope.ngModel)) {            
            var itemIndex = _.indexOf($scope.ngModel, itemData.id); 
            if (itemIndex > -1)  {
              $('#' + $scope.ciId)
              .append(new Option(itemData.text, itemData.id, false, true)); 
            }            
          } else {
            if (itemData.id === $scope.ngModel + '') {
              $('#' + $scope.ciId)
              .append(new Option(itemData.text, itemData.id, false, true));
              break;
            }
          }                        
        }     
        $('#' + $scope.ciId).trigger('change');             
      });
    }
    else if ($scope.ngModel === 0) {
      $('#' + $scope.ciId)
      .append(new Option(msg.SelectTextStart, 0, false, true));
      $('#' + $scope.ciId).trigger('change');  
    }
  }

  function initControl() {
    $timeout(function () {
      $('#' + $scope.ciId).select2({
        language: {
          noResults: function (params) {
            return 'Không có dữ liệu.';
          }
        },
        ajax: {
          delay: 250,
          url: $scope.url,
          data: function (params) {
            var queryParameters = {
              q: params.term
            }
            return queryParameters;
          },
          processResults: function (data, params) {
            var results = [];
            var dataResult = data.Data;
            for (var i = 0; i < dataResult.length; i++) {
              results.push({
                id: dataResult[i].Id,
                text: dataResult[i].Text,
                level: dataResult[i].Level !== '' ? dataResult[i].Level : '1'
              });
            }
            return {
              results: results
            };
          },
          transport: function (params, success, failure) {
            var filter = {};          
            if (angular.isDefined($scope.ciFilterDefaultObj) && 
            angular.isObject($scope.ciFilterDefaultObj)) {
              filter = angular.copy($scope.ciFilterDefaultObj);              
            }
            filter.Skip = 0;
            filter.Take = 50;
            filter.OrderBys = [];            
            if (angular.isDefined($scope.ciFilterDefault) && $scope.ciFilterDefault !== '') {
              filter.QueryString = $scope.ciFilterDefault;
            }
            filter.Filters = _getCondition(params.data.q);
            var request = $http.post(url, filter).then(function (resp) {
              success(resp.data);
            });
            return request;
          },
        },
        templateResult: formatResult,
        templateSelection: function (item) {
          return item.text;
        },
        escapeMarkup: function (m) {
          return m;
        },
      }).on('change', function (e) {
        //Edit here.
        onChangeSelect(this);
      });
      initSelection();
    }, 250);
  }


  function initControlOneLoad() {
    $timeout(function () {
      $http.get(url).then(function (rep) {
        var results = [];
        var dataResult = rep.data.Data;
        
        for (var i = 0; i < dataResult.length; i++) {
          var item = {
            id: dataResult[i].Id + '',
            text: dataResult[i].Text,
            level: dataResult[i].Level !== '' ? dataResult[i].Level : '1'
          };
          if (_.isArray($scope.ngModel)) {
            var itemModel = _.findIndex($scope.ngModel, function(val) {
              return item.id === val;
            });
            item.selected = itemModel > -1;  
          } else if ($scope.ngModel && $scope.ngModel + '' === item.id) {            
            item.selected = true;
          }          
          results.push(item);
        }       
        
        _control.select2({
          language: {
            noResults: function (params) {
              return 'Không có dữ liệu.';
            }
          },
          templateResult: formatResult,
          data: results
        }).on('change', function (e) {
          onChangeSelect(this);
        });  
      });
    });
  }

  function onChangeSelect(eleThis) {
    $timeout(function () {
      if (angular.isUndefined($scope.ciValueType) || $scope.ciValueType === 'key') {

        if ($scope.ciIsMultiple === 'true') {
          var vals = [];
          for (var j = 0; j < $(eleThis).select2('data').length; j++) {
            vals.push($(eleThis).select2('data')[j].id)
          }
          $scope.ngModel = vals;
        } else {
          if ($(eleThis).select2('data').length > 0) {
            $scope.ngModel = $(eleThis).select2('data')[0].id;
          }          
        }
      } else {
        if ($scope.ciIsMultiple === 'true') {
          var vals = [];
          for (var j = 0; j < $(eleThis).select2('data').length; j++) {
            vals.push($(eleThis).select2('data')[j])
          }
          $scope.ngModel = vals;
        } else {
          $scope.ngModel = $(eleThis).select2('data')[0];
        }
      }
      $scope.$apply();
    });
  }

  if ($scope.ciOneLoad === 'true') {
    initControlOneLoad();
  } else {
    initControl();
  }
}

/* @ngInject */
export default selectController;
