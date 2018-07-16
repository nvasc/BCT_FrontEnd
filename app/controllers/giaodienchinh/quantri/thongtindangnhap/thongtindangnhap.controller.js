import gridCommand from './grid-command.html';
import deleteTemplate from './deleteTemplate.html';
import expireDateTemplate from './expire-date-templete.html';
import issuerDateTemplate from './issuer-date-templete.html';

function thongtindangnhapController($q, $scope, thongtindangnhapService, popupFactory) {
  const vm = this;
  //Get Role
  vm.role = thongtindangnhapService.getRole();
  // Message ------------------
  var rss = {
    DeleteTitle: 'Yêu cầu đăng xuất',
    DeleteButton: 'Đăng xuất',
    DeleteButtonClass: 'btn-danger',
    CancelButton: 'Hủy',
    CancelButtonClass: 'btn-default',
    ViewTitle: 'Chi tiết',
    CloseButton: 'Đóng'   
  }
  // Initial in screen ------------------
  thongtindangnhapService.init();
  var _scopeGrid = null;
  // Scope of Grid
  vm.setScopeGrid = function (s) {
    _scopeGrid = s;
  };

  // Column Define of Grid Component ------------------
  vm.colDefs = [{
    name: 'Username',
    displayName: 'Tài khoản',
  }, {
    name: 'UserAgent',
    displayName: 'User Agent',
    cellTooltip: function(row, col) {
      return row.entity.UserAgent;
    }
  },{
    name: 'PublicIp',
    displayName: 'Địa chỉ IP',
  }, {
    name: 'Issuer',
    displayName: 'Kết nối từ',
  },{
    name: 'IssuerFrom',
    displayName: 'Kết nối đến',
  },{
    name: 'IssuedUtc',
    cellTemplate: issuerDateTemplate,    
    displayName: 'Ngày đăng nhập',
  },{
    name: 'ExpiresUtc',
    cellTemplate: expireDateTemplate, 
    displayName: 'Ngày hết hạn',
  }, {
    name: ' ',
    cellTemplate: gridCommand,
    cellClass: 'grid-command',
    width: 30,
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

  vm.delete = function (row) {
    var deletePopup = null;
    var option = {
      rss: rss,
      title: vm.role.delete ? rss.DeleteTitle : rss.ViewTitle,
      columnClass: 'col-md-offset-2 col-md-8',   
      icon: 'fa fa-times',
      content: deleteTemplate,
      scope: $scope,      
    }

    if (!vm.role.delete) {
      option.buttons = {
        close: {
          text: rss.CloseButton,
          btnClass: rss.CancelButtonClass,
          action: function (scope, button) {
            
          }
        }
      }
    }
    else {
      option.buttons = {
        Delete: {
          text: rss.DeleteButton,
          btnClass: rss.DeleteButtonClass,
          action: function (scope, button) {
            thongtindangnhapService.delete(row.entity.Id).then(function () {
              if (_scopeGrid) {
                _scopeGrid.grid.refresh();
              }
              if (deletePopup) {
                deletePopup.close();
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
    }
    
    popupFactory.setOptions(option);
    thongtindangnhapService.get(row.entity.Id).then(function (obj) {  
      vm.saveObj = obj;  
      deletePopup = popupFactory.custom();
    });
  };  
}

/* @ngInject */
export default thongtindangnhapController;
