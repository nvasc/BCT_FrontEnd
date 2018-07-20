import changepasswordTemplate from './changePasswordTemplate.html';
import changeThongTinTaiKhoanTemplate from './changeThongTinTaiKhoanTemplate.html';

function headerController ($scope, giaodienchinhService, oauthDataFactory, 
  $state, oauthFactory, popupFactory) {
  const vm = this;

  function init() {
    vm.UserName = giaodienchinhService.getUserName();
    vm.TenantName = giaodienchinhService.getTenantName();
    vm.LoginName = giaodienchinhService.getLoginName(); 
  }
  init();
  var rss = {
    ChangePasswordTitle: 'Đổi mật khẩu',
    ChangeButton: 'Cập nhật',
    ConfigButtonClass: 'btn-primary',

    CancelButton: 'Hủy',
    CancelButtonClass: 'btn-default'    
  }
 
   
  vm.saveObj = {};

  vm.logout = function () {
    oauthFactory.logOut();
    
    $state.go('dangnhap');
  }

  vm.changePassword = function() {
    var popup = null;
    popupFactory.setOptions({
      rss: rss,
      title: rss.ChangePasswordTitle,
      columnClass: 'col-md-offset-4 col-md-4',  
      icon: 'fa fa-cog',
      content: changepasswordTemplate,
      scope: $scope,
      buttons: {
        Update: {
          text: rss.ChangeButton,
          btnClass: rss.ConfigButtonClass,
          action: function (scope, button) {
            giaodienchinhService.changePassword(vm.saveObj).then(function (obj) {   
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
    popup = popupFactory.custom();    
  }
  
  vm.changeThongTinTaiKhoan = function() {
    var popup = null;
    popupFactory.setOptions({
      rss: rss,
      title: rss.ChangePasswordTitle,
      columnClass: 'col-md-offset-4 col-md-4',  
      icon: 'fa fa-cog',
      content: changeThongTinTaiKhoanTemplate,
      scope: $scope,
      buttons: {
        Update: {
          text: rss.ConfigButtonClass,
          btnClass: rss.UpdateButtonClass,
          action: function (scope, button) {
            giaodienchinhService.updateTaiKhoanCuaToi(vm.saveObj).then(function (obj) {   
              if (obj && popup) {
                oauthFactory.refreshToken().then(function (result) {
                  init();
                  popup.close();
                });                
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
    giaodienchinhService.taiKhoanCuaToi().then(function (obj) {      
      vm.saveObj = obj; 
      popup = popupFactory.custom();
    });
  }

  vm.test = function () {
    oauthFactory.refreshToken().then(function (result) {
      console.log(result);
    });
  }
}

/* @ngInject */
export default headerController;