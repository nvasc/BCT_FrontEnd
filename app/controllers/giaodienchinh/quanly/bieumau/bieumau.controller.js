
import gridCommand from './grid-command.html';
import colDownload from './col-download.html';
import saveTemplate from './save.html';
import configTempate from './config.html';
import GridEditConfigBieuMau from './grid-edit-config-bieu-mau';
import GridEditConfigBieuMauThamSo from './grid-edit-config-bieu-mau-tham-so';
import GridEditConfigBieuMauDataFirstImport from './grid-edit-config-bieu-mau-data-first-import';
import loaibieumauTemplate from './loaibieumau-templete.html';


function bieumauController ($q, $scope, $timeout, bieumauService, popupFactory) {
  const vm = this;
  //Get Role
  vm.role = bieumauService.getRole();
  // Message ------------------
  var rss = {
    CreateTitle: 'Tạo mới biểu mẫu',
    CreateButton: 'Tạo mới',
    CreateButtonClass: 'btn-primary',

    UpdateTitle: 'Cập nhật một biểu mẫu',
    UpdateButton: 'Cập nhật',
    UpdateButtonClass: 'btn-primary',

    DeleteConfirm: 'Bạn có chắc chắn muốn xóa biểu mẫu này?',
    DeleteTitle: 'Xóa một biểu mẫu',
    DeleteButton: 'Xóa',
    DeleteButtonClass: 'btn-danger',

    DetailTitle: 'Chi tiết biểu mẫu',
    CloseButton: 'Đóng',

    ConfigTitle: 'Cấu hình một biểu mẫu(chức năng chỉ dành cho người quản trị)',
    ConfigButton: 'Cấu hình',
    ConfigButtonClass: 'btn-primary',

    CancelButton: 'Hủy',
    CancelButtonClass: 'btn-default'    
  }

  // Initial in screen ------------------
  bieumauService.init();
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
    name: 'LoaiBieuMau',
    displayName: 'Loại',    
    enableFiltering: false,
    cellTemplate: loaibieumauTemplate,
    width: 100,
  },{
    name: 'Ma',
    displayName: 'Mã',
    width: 100,
  }, {
    name: 'Ten',
    displayName: 'Tên',
  }, {
    name: 'TenFileBieuMau',
    displayName: 'Tập Tin',
    cellTemplate: colDownload,
    cellClass: 'grid-command',
  }, {
    name: ' ',
    cellTemplate: gridCommand,
    cellClass: 'grid-command',
    width: 90,
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

    bieumauService.get(0).then(function (obj) {      
      vm.saveObj = obj;
      popupFactory.create(function () { 
        var deferred = $q.defer();
        bieumauService.create(vm.saveObj).then(function () {
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
    bieumauService.get(row.entity.Id).then(function (obj) {      
      vm.saveObj = obj;
      popupFactory.update(function () { 
        var deferred = $q.defer();
        bieumauService.update(row.entity.Id, vm.saveObj).then(function () {
          deferred.resolve(true);
          if (refreshGridCallBack) {
            refreshGridCallBack();
          }   
        }, function () {
          deferred.resolve(false);  
        })              
        return deferred.promise;
      }, function () { 
        vm.saveObj = {}; 
      }, vm.role);
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
      bieumauService.delete(row.entity.Id).then(function () {
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

  vm.config = function (row) {   
    var popup = null;
    popupFactory.setOptions({
      rss: rss,
      title: rss.ConfigTitle,
      columnClass: 'col-md-offset-1 col-md-10',  
      icon: 'fa fa-cog',
      content: configTempate,
      scope: $scope,
      buttons: {
        Update: {
          text: rss.UpdateButton,
          btnClass: rss.UpdateButtonClass,
          action: function (scope, button) {
            bieumauService.saveConfig(row.entity.Id, vm.saveObj).then(function (obj) {   
              if (obj && popup) {
                popup.close();
              }
            });
            return false;
          }
        },
        close: {
          text: rss.CancelButton,
          btnClass: rss.CancelButtonClass,
          action: function (scope, button) {
            
          }
        }
      }
    });    
    
    bieumauService.getConfig(row.entity.Id).then(function (obj) {      
      vm.saveObj = obj;
      var length = vm.saveObj.ExcelConfig.ColConfigs.length
      if (length > 0) {
        vm.saveObj.ExcelConfig.ColConfigs[length - 1].IsLast = true;
      }      
      vm.configs = new GridEditConfigBieuMau($scope, $timeout, vm.saveObj.ExcelConfig.ColConfigs);
      length = vm.saveObj.ExcelConfig.ColConfigParams.length
      if (length > 0) {
        vm.saveObj.ExcelConfig.ColConfigParams[length - 1].IsLast = true;
      }      
      vm.configParams = new GridEditConfigBieuMauThamSo($scope, $timeout, 
          vm.saveObj.ExcelConfig.ColConfigParams);

      length = vm.saveObj.ExcelConfig.ColConfigDataFirstImports.length
      if (length > 0) {
        vm.saveObj.ExcelConfig.ColConfigDataFirstImports[length - 1].IsLast = true;
      }      
      vm.configDataFirstImports = new GridEditConfigBieuMauDataFirstImport($scope, $timeout, 
          vm.saveObj.ExcelConfig.ColConfigDataFirstImports);
      popup = popupFactory.custom();
    });
  }

  vm.changeLoaiBieuMau = function () {
    var loaiBieuMau = parseInt(vm.saveObj.LoaiBieuMau);
    if (loaiBieuMau === 1) {
      vm.saveObj.ImportType = 1;
    } else {
      vm.saveObj.ImportType = 0;
    }
    console.log(vm.saveObj);
  }
  
}

/* @ngInject */
export default bieumauController;