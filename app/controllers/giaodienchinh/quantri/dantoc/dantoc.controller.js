
import gridCommand from './grid-command.html';
import colActive from './col-active.html';
import saveTemplate from './save.html';

function dantocController ($q, $scope, dantocService, popupFactory) {
  const vm = this;
  // Message ------------------
  var rss = {
    CreateTitle: 'Tạo mới tỉnh thành',
    CreateButton: 'Tạo mới',
    CreateButtonClass: 'btn-primary',

    UpdateTitle: 'Cập nhật một tỉnh thành',
    UpdateButton: 'Cập nhật',
    UpdateButtonClass: 'btn-primary',

    DeleteConfirm: 'Bạn có chắc chắn muốn xóa tỉnh thành này?',
    DeleteTitle: 'Xóa một tỉnh thành',
    DeleteButton: 'Xóa',
    DeleteButtonClass: 'btn-danger',

    CancelButton: 'Hủy',
    CancelButtonClass: 'btn-default'    
  }

  // Initial in screen ------------------
  dantocService.init();
  var _scopeGrid = null;
  // Scope of Grid
  vm.setScopeGrid = function (s) {
    _scopeGrid = s;
  };

  function refreshGrid() {
    if (_scopeGrid) {
      _scopeGrid.refresh();
    }
  }

  // Column Define of Grid Component ------------------
  vm.colDefs = [{
    name: 'Ten',
    displayName: 'Tên',
  }, {
    name: ' ',
    cellTemplate: gridCommand,
    cellClass: 'grid-command',
    width: 60,
    enableSorting: false,
    enableFiltering: false,
  }];

  // manually Filter in Grid Component ------------------
  vm.isFilter = false;
  vm.filter = function () {
    vm.isFilter = !vm.isFilter;
  }

  // CRUD for this function ------------------
  vm.saveObj = {};
  vm.action = {};

  vm.create = function (id, type, refreshGridCallBack) {
    popupFactory.setOptions({
      rss: rss,
      title: rss.CreateTitle,
      columnClass: 'col-md-offset-3 col-md-6',        
      icon: 'fa fa-plus', 
      content: saveTemplate,
      scope: $scope,
    });

    dantocService.get(0).then(function (obj) {      
      vm.saveObj = obj;
      popupFactory.create(function () { 
        var deferred = $q.defer();
        dantocService.create(vm.saveObj).then(function () {
          deferred.resolve(true);
          if (_scopeGrid) {
            _scopeGrid.grid.refresh();            
          }  
        }, function () {
          deferred.resolve(false);  
        })    
        return deferred.promise;
      }, function () { vm.saveObj = {}; });
    });    
  }

  vm.update = function (row, type, refreshGridCallBack) {
    popupFactory.setOptions({
      rss: rss,
      title: rss.UpdateTitle,
      columnClass: 'col-md-offset-3 col-md-6',  
      icon: 'fa fa-edit',
      content: saveTemplate,
      scope: $scope,
    });
    dantocService.get(row.entity.Id).then(function (obj) {      
      vm.saveObj = obj;
      popupFactory.update(function () { 
        var deferred = $q.defer();
        dantocService.update(row.entity.Id, vm.saveObj).then(function () {
          deferred.resolve(true);
          if (refreshGridCallBack) {
            refreshGridCallBack();
          }   
        }, function () {
          deferred.resolve(false);  
        })              
        return deferred.promise;
      }, function () { vm.saveObj = {}; });
    });
  };
  vm.action.update = vm.update;

  vm.delete = function (row, type, refreshGridCallBack) {
    popupFactory.setOptions({
      rss: rss,
      title: rss.DeleteTitle,
      columnClass: 'col-md-offset-5 col-md-3',   
      icon: 'fa fa-times',
      content: rss.DeleteConfirm,
      scope: $scope,
    });
    popupFactory.delete(function () { 
      var deferred = $q.defer();
      dantocService.delete(row.entity.Id).then(function () {
        deferred.resolve(true);
        if (refreshGridCallBack) {          
          refreshGridCallBack();
        }
      }, function () {
        deferred.resolve(false);  
      })    
      return deferred.promise;
    }, function () { vm.saveObj = {} });
  };
  vm.action.delete = vm.delete;
}

/* @ngInject */
export default dantocController;