import gridCommand from './grid-command.html';
import './style.css';
import colActive from './col-active.html';
import saveTemplate from './save.html';
import GridEditIssuerClient from './grid-edit-issuer-client'

function clientController($q, $scope, clientService, $timeout, popupFactory) {
  const vm = this;
  // Message ------------------
  var rss = {
    CreateTitle: 'Tạo mới một client',
    CreateButton: 'Tạo mới',
    CreateButtonClass: 'btn-primary',

    UpdateTitle: 'Cập nhật một client',
    UpdateButton: 'Cập nhật',
    UpdateButtonClass: 'btn-primary',

    DeleteConfirm: 'Bạn có chắc chắn muốn xóa client này?',
    DeleteTitle: 'Xóa một client',
    DeleteButton: 'Xóa',
    DeleteButtonClass: 'btn-danger',

    CancelButton: 'Hủy',
    CancelButtonClass: 'btn-default'    
  }
  // Initial in screen ------------------
  clientService.init();
  var _scopeGrid = null;
  // Scope of Grid
  vm.setScopeGrid = function (s) {
    _scopeGrid = s;
  };

  // Column Define of Grid Component ------------------
  vm.colDefs = [{
    name: 'Audience',
    displayName: 'Key',
  }, {
    name: 'Secret',
    displayName: 'Secret',    
  }, {
    name: 'Issuer',
    displayName: 'Kết nối từ',
    cellTooltip: function(row, col) {
      return row.entity.Issuer;
    }
  }, {
    name: 'IssuerFrom',
    displayName: 'Kết nối đến',
    cellTooltip: function(row, col) {
      return row.entity.IssuerFrom;
    }
  }, {
    name: 'RefreshTokenLifeTime',
    displayName: 'Expire In',
    dataType: 1,
    width: 90,
  }, {
    width: 90,
    name: 'IsActive',
    displayName: 'Trạng Thái',
    cellTemplate: colActive,
    cellClass: 'grid-text-align-center',
    enableSorting: false,
    dataType: 3
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

  vm.create = function (id, type, refreshGridCallBack) {    
    popupFactory.setOptions({
      rss: rss,
      title: rss.CreateTitle,
      columnClass: 'col-md-offset-2 col-md-8',      
      icon: 'fa fa-plus', 
      content: saveTemplate,
      scope: $scope,
    });

    clientService.get(0).then(function (obj) {      
      vm.saveObj = obj;          
      vm.configs = new GridEditIssuerClient($scope, $timeout, vm.saveObj.Issuers);
      popupFactory.create(function () { 
        var deferred = $q.defer();
        clientService.create(vm.saveObj).then(function () {
          deferred.resolve(true); 
          if (_scopeGrid.grid && _scopeGrid.grid.refresh) {
            _scopeGrid.grid.refresh();
          }        
        }, function () {
          deferred.resolve(false);  
        }) 
        
        deferred.resolve(true);    
        return deferred.promise;
      }, function () { vm.saveObj = {}; });
    });    
  }
  vm.update = function (row, type, refreshGridCallBack) {
    popupFactory.setOptions({
      rss: rss,
      title: rss.UpdateTitle,
      columnClass: 'col-md-offset-2 col-md-8',
      icon: 'fa fa-edit',
      content: saveTemplate,
      scope: $scope,
    });
    clientService.get(row.entity.Id).then(function (obj) {      
      vm.saveObj = obj;
      vm.configs = new GridEditIssuerClient($scope, $timeout, vm.saveObj.Issuers);
      popupFactory.update(function () { 
        var deferred = $q.defer();
        clientService.update(row.entity.Id, vm.saveObj).then(function () {
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
      clientService.delete(row.entity.Id).then(function () {
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
  vm.action = {
    update: vm.update,
    delete: vm.delete,
  };
}

/* @ngInject */
export default clientController;
