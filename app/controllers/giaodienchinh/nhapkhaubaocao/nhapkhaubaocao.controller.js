
import gridCommand from './grid-command.html';
import colDownload from './col-download.html';
import saveTemplate from './save.html';
import detailTemplate from './detail.html';
import colStatusTemplate from './col-status.html';

function nhapkhaubaocaoController ($q, $scope, nhapkhaubaocaoService, popupFactory) {
  const vm = this;
  // Message ------------------
  var rss = {
    CreateTitle: 'Tạo mới nhập khẩu báo cáo',
    CreateButton: 'Tạo mới',
    CreateButtonClass: 'btn-primary',


    DeleteConfirm: 'Bạn có chắc chắn muốn xóa nhập khẩu báo cáo này?',
    DeleteTitle: 'Xóa một nhập khẩu báo cáo',
    DeleteButton: 'Xóa',
    DeleteButtonClass: 'btn-danger',

    DetailTitle: 'Xem chi tiết',
    CloseButton: 'Đóng',
    CancelButton: 'Hủy',
    CancelButtonClass: 'btn-default'    
  }
  vm.defaultFilter = {};
  // Initial in screen ------------------
  nhapkhaubaocaoService.init();
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
    name: 'MaBieuMauChuan',
    displayName: 'Mã biểu mẫu chuẩn',
  }, {
    name: 'TenBieuMauChuan',
    displayName: 'Tên biểu mẫu chuẩn',
  }, {
    name: 'TenFileBieuMau',
    displayName: 'Tập Tin',
    cellTemplate: colDownload,
    cellClass: 'grid-command',
  }, {
    name: 'Status',
    displayName: 'Trạng thái',
    width: 130,
    cellTemplate: colStatusTemplate,
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

    nhapkhaubaocaoService.get(0).then(function (obj) {      
      vm.saveObj = obj;
      popupFactory.create(function () { 
        var deferred = $q.defer();
        nhapkhaubaocaoService.create(vm.saveObj).then(function () {
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

  vm.detail = function (row) {
    popupFactory.setOptions({
      rss: rss,
      title: rss.DetailTitle,
      columnClass: 'col-md-offset-3 col-md-6',  
      icon: 'fa fa-edit',
      content: detailTemplate,
      scope: $scope,
      buttons : {        
        close: {
          text: rss.CloseButton,
          btnClass: rss.CancelButtonClass,         
        }
      }
    });
    nhapkhaubaocaoService.get(row.entity.Id).then(function (obj) {      
      vm.saveObj = obj;   
      vm.saveObj.IsDetail = true;
      popupFactory.custom();
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
      nhapkhaubaocaoService.delete(row.entity.Id).then(function () {
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
export default nhapkhaubaocaoController;