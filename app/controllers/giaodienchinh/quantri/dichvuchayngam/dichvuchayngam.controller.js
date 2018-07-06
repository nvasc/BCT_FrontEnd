
import random from '../../../../commons/utility/random';
import gridCommand from './grid-command.html';
import saveTemplate from './save.html';
import colStatusTemplate from './col-status.html';

function dichvuchayngamController ($q, $scope, dichvuchayngamService, popupFactory) {
  const vm = this;
  // Message ------------------
  var rss = {
    CreateTitle: 'Tạo mới chức năng',
    CreateButton: 'Tạo mới',
    CreateButtonClass: 'btn-primary',

    UpdateTitle: 'Cập nhật một chức năng',
    UpdateButton: 'Cập nhật',
    UpdateButtonClass: 'btn-primary',

    DeleteConfirm: 'Bạn có chắc chắn muốn xóa chức năng này?',
    DeleteTitle: 'Xóa một chức năng',
    DeleteButton: 'Xóa',
    DeleteButtonClass: 'btn-danger',

    CancelButton: 'Hủy',
    CancelButtonClass: 'btn-default'    
  }

  // Initial in screen ------------------
  dichvuchayngamService.init();
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
    name: 'Name',
    displayName: 'Tên dịch vụ',
  }, {
    name: 'RuntimeTypeStr',
    displayName: 'Dịch vụ',
  },{
    name: 'RuntimeFunctionStr',
    displayName: 'Chức năng',
  },
  {
    name: 'Cron',
    displayName: 'Thời gian chạy',
  },{
    name: 'CronDescription',
    displayName: 'mô tả',
  },{
    name: 'RuntimeStatus',
    displayName: 'Trạng thái',
    width: 90,
    cellTemplate: colStatusTemplate,
    cellClass: 'grid-text-align-center',
    enableSorting: false,
    dataType: 3
  }, {
    name: ' ',
    cellTemplate: gridCommand,
    cellClass: 'grid-command grid-text-align-center',
    width: 120,
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
  vm.selectObj = {};

  vm.create = function (id, type, refreshGridCallBack) {
    popupFactory.setOptions({
      rss: rss,
      title: rss.CreateTitle,
      columnClass: 'col-md-offset-3 col-md-6',        
      icon: 'fa fa-plus', 
      content: saveTemplate,
      scope: $scope,
    });

    dichvuchayngamService.get(0).then(function (obj) {      
      vm.saveObj = obj;
      console.log(obj);
      popupFactory.create(function () { 
        var deferred = $q.defer();
        dichvuchayngamService.create(vm.saveObj).then(function () {
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
    dichvuchayngamService.get(row.entity.Id).then(function (obj) {     
      vm.saveObj = obj;
      vm.saveObj.SelectId = obj.RuntimeFunction;
      vm.saveObj.IsDisabled = obj.RuntimeStatus === 1;
      popupFactory.update(function () { 
        var deferred = $q.defer();
        dichvuchayngamService.update(row.entity.Id, vm.saveObj).then(function () {
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
      dichvuchayngamService.delete(row.entity.Id).then(function () {
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

  vm.run = function(entity) {
   
    dichvuchayngamService.start(entity.JobId).then(function(rs) {
      if (_scopeGrid) {
        _scopeGrid.grid.refresh();            
      }  
    });
  }

  vm.stop = function(entity) {
    dichvuchayngamService.stop(entity.JobId).then(function(rs) {
      if (_scopeGrid) {
        _scopeGrid.grid.refresh();            
      }  
    });
  }
}

/* @ngInject */
export default dichvuchayngamController;