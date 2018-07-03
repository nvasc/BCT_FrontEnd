import colActive from './col-active.html';

import cacQuyenUngdungTemplete from './cacquyenungdungTemplete.html';
import gridCommandCacQuyenUngDung from './grid-command-cacquyenungdung.html';
import saveCacQuyenUngDung from './save.html';

function phanquyennguoidungController($q, $scope, phanquyennguoidungService, popupFactory) {
  const vm = this;
  var rss = {
    phanquyennguoidung: 'người dùng vào quyền trong ứng dụng',
    CreateTitle: 'Tạo mới',
    CreateButton: 'Tạo mới',
    CreateButtonClass: 'btn-primary',

    UpdateTitle: 'Cập nhật',
    UpdateButton: 'Cập nhật',
    UpdateButtonClass: 'btn-primary',

    DeleteConfirm: 'Bạn có chắc chắn muốn xóa dữ liệu này?',
    DeleteTitle: 'Xóa',
    DeleteButton: 'Xóa',
    DeleteButtonClass: 'btn-danger',

    CancelButton: 'Hủy',
    CancelButtonClass: 'btn-default'
  }

  // Initial in screen ------------------
  phanquyennguoidungService.init();

  var _scopeGrid = null;
  // Scope of Grid
  vm.setScopeGrid = function (s) {
    _scopeGrid = s;
  };
  vm.defaultFilter = {};
  vm.action = {};

  
  vm.saveObj = {};
  vm.create = function (parentId, type, refreshGridCallBack) {

    popupFactory.setOptions({
      rss: rss,
      title: rss.CreateTitle + ' ' + rss.phanquyennguoidung,
      columnClass: 'col-md-offset-3 col-md-6',
      icon: 'fa fa-plus',
      content: saveCacQuyenUngDung,
      scope: $scope,
    });

    phanquyennguoidungService.get(0, parentId, type).then(function (obj) {
      vm.saveObj = obj;
      vm.saveObj.IdRole = parentId;
      vm.saveObj.ActionUserRole = 2;
      vm.saveObj.roleObj = { IdRole: parentId };
      popupFactory.create(function () {
        var deferred = $q.defer();
        phanquyennguoidungService.create(type, vm.saveObj).then(function () {
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
      });
    });
  }
  vm.action.create = vm.create;

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
      phanquyennguoidungService.delete(row.entity.Id, type).then(function () {
        deferred.resolve(true);
        if (refreshGridCallBack) {          
          refreshGridCallBack();
        }
      }, function () {
        deferred.resolve(false);  
      })    
      return deferred.promise;
    }, function () { vm.saveObj = {} });
  }
  vm.action.delete = vm.delete;

  // Grid defined ------------------------
  vm.cacquyenungdungExpand = {
    filterDefault: {},
    action: {
      create: vm.create,
      delete: vm.delete
    },
    rowTemplate: cacQuyenUngdungTemplete,
    height: 300,
    rowExpandedStateChanged: function (row, event) {
      this.filterDefault.IdRole = row.entity.Id;
    },
    create: function () {
      console.log('zo');
    },
    Options: {
      colDefs: [{
        name: 'UserName',
        displayName: 'Tài khoản',
      }, {
        name: 'Email',
        displayName: 'Email',
      },{
        name: 'IsActive',
        displayName: 'Hoạt động',
        width: 90,
        cellTemplate: colActive,
        cellClass: 'grid-text-align-center',
        enableSorting: false,
        dataType: 3
      },{
        name: ' ',
        cellTemplate: gridCommandCacQuyenUngDung,
        cellClass: 'grid-command',
        width: 60,
        enableSorting: false,
        enableFiltering: false,
      }],
    }
  }

  vm.colDefs = [{
    name: 'Name',
    displayName: 'Tên',
  }, {
    name: 'Description',
    displayName: 'Mô tả',
  }];

  //Default Filter 
  vm.filterDefault = {
    Level: 1,
  }

  // manually Filter in Grid Component ------------------
  vm.isFilter = false;
  vm.filter = function () {
    vm.isFilter = !vm.isFilter;
  }
}

/* @ngInject */
export default phanquyennguoidungController;
