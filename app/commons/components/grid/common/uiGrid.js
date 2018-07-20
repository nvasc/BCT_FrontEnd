import headerHandle from './headerHandle';
import PagingGrid from './pagingGrid';
import OrderByGrid from './orderByGrid';
import FilterGrid from './filterGrid';
import HandleDataGrid from './handleDataGrid';

export default function UiGrid(scope, timeout, uiGridConstants, http, oauthDataFactory, dataName,
    expandObject, filterDefaultObject) {
  var self = this;
  self.url = oauthDataFactory.urlMain() + scope.url;
  self.gridApi = null;
  scope[dataName] = [];  
  var pagingGrid = new PagingGrid();
  var filterGrid = new FilterGrid();
  var orderByGrid = new OrderByGrid(uiGridConstants);
  var handleDataGrid = new HandleDataGrid(timeout, http, self.url, filterDefaultObject);
  function setDataResult (data) {
    if (expandObject && expandObject.Options) {
      for (var i = 0; i < data.length; i++) {
        data[i].expandObject = expandObject;
        data[i].expandOptions = expandObject.Options;           
      }
    }
    scope[dataName] = data;
  }
  
  self.gridOptions = {
    infiniteScrollDown: true,
    infiniteScrollUp: true,
    infiniteScrollRowsFromEnd: 40,
    enableColumnMenus: false,
    columnDefs: headerHandle(scope.colDefs, scope),
    useExternalFiltering: true,
    onRegisterApi: function (gridApi) {
      gridApi.infiniteScroll.on.needLoadMoreData(scope, getDataDown);
      gridApi.infiniteScroll.on.needLoadMoreDataTop(scope, getDataUp);
      gridApi.core.on.sortChanged(scope, sortChanged);
      setExpandEvent(gridApi);
      self.gridApi = gridApi;
    },
    data: dataName
  };
  function setExpandEvent(gridApi) {      
    if (expandObject && expandObject.rowExpandedStateChanged) {
      gridApi.expandable.on.rowExpandedStateChanged(scope, function(row) {      
        expandObject.rowExpandedStateChanged(row);
      });
    }
  }
  //init set option expand
  if (expandObject) {
    self.gridOptions.expandableRowTemplate = expandObject.rowTemplate;
    self.gridOptions.expandableRowHeight = expandObject.height;
    self.gridOptions.expandableRowScope = {
      subGridVariable: 'subGridScopeVariable'
    };    
  }

  //gridApi event -------------------------------  
  function sortChanged(grid, sortColumns) {
    orderByGrid.sortChanged(grid, sortColumns);    
    pagingGrid.defaultData();
    scope[dataName] = [];
    handleDataGrid.runFirst(pagingGrid, self.gridApi, orderByGrid, filterGrid, setDataResult);
  }

  function getDataDown() {
    handleDataGrid.getDataDown(pagingGrid, self.gridApi, orderByGrid, filterGrid, 
      setDataResult, scope[dataName]);
  }
  function getDataUp() {
    handleDataGrid.getDataUp(pagingGrid, self.gridApi, orderByGrid, filterGrid, 
      setDataResult, scope[dataName]);
  }

  //Map enter
  self.mapEnter = function (e, colFilter) {
    var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;    
    if (key === 13) {
      handleDataGrid.runFirst(pagingGrid, self.gridApi, orderByGrid, filterGrid, 
        setDataResult, scope[dataName]);              
    }    
  }
  self.init = function() {
    handleDataGrid.runFirst(pagingGrid, self.gridApi, orderByGrid, filterGrid, 
        setDataResult);
  }

}