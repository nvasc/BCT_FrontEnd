import cacquyenungdungTemplate from './cacquyenungdungTemplete.html';
import gridCommandTaiKhoan from './grid-command-taikhoan.html';
import gridCommandCacQuyenUngDung from './grid-command-cacquyenungdung.html';

import colActive from './col-active.html';
import saveTaiKhoanTemplate from './save-taikhoan.html';
import saveCacQuyenungDungTemplate from './save-cacquyenungdung.html';


function taikhoanController ($q, $scope, taikhoanService, popupFactory) {
  const vm = this;
  // Message ------------------
  var rss = {
    TitleTaiKhoan: 'tài khoản',
    TitleQuyenTrongUngDung: 'quyền trong ứng dụng',

    CreateButton: 'Tạo mới',
    CreateButtonClass: 'btn-primary',

    UpdateTitle: 'Cập nhật một tài khoản',
    UpdateButton: 'Cập nhật',
    UpdateButtonClass: 'btn-primary',

    DeleteConfirm: 'Bạn có chắc chắn muốn xóa tài khoản này?',
    DeleteTitle: 'Xóa một tài khoản',
    DeleteButton: 'Xóa',
    DeleteButtonClass: 'btn-danger',

    CancelButton: 'Hủy',
    CancelButtonClass: 'btn-default'    
  }

  // Initial in screen ------------------
  taikhoanService.init();
  var _scopeGrid = null;

  // Scope of Grid
  vm.setScopeGrid = function (s) {
    _scopeGrid = s;
  };
  vm.defaultFilter = {};
  vm.action = {};
  vm.saveObj = {};
  vm.create = function (parentId, type, refreshGridCallBack) {
    var title = '';
    var template = '';
    switch (type) {
      case 1:
        title = rss.CreateButton + ' ' + rss.TitleTaiKhoan;
        template = saveTaiKhoanTemplate;
        break;
      case 2:
        title = rss.CreateButton + ' ' + rss.TitleQuyenTrongUngDung;
        template = saveCacQuyenungDungTemplate;

        vm.defaultFilter = {
          UserId : parentId,
          QueryId :0
        };
        break;
    }

    popupFactory.setOptions({
      rss: rss,
      title: title,
      columnClass: 'col-md-offset-3 col-md-6',
      icon: 'fa fa-plus',
      content: template,
      scope: $scope,
    });

    taikhoanService.get(0, parentId, type).then(function (obj) {
      vm.saveObj = obj;
      vm.saveObj.IdUser = parentId;
      vm.saveObj.userObj = { IdUser: parentId };
      popupFactory.create(function () {
        var deferred = $q.defer();
        taikhoanService.create(type, vm.saveObj).then(function () {
          deferred.resolve(true);
          if (refreshGridCallBack) {
            refreshGridCallBack();
          }
          else if (_scopeGrid) {
            _scopeGrid.gridExpand.refresh();
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

  vm.update = function (row, type, refreshGridCallBack) {
    popupFactory.setOptions({
      rss: rss,
      title: rss.UpdateTitle + ' ' + rss.TitleTaiKhoan,
      columnClass: 'col-md-offset-3 col-md-6',
      icon: 'fa fa-edit',
      content: saveTaiKhoanTemplate,
      scope: $scope,
    });

    taikhoanService.get(row.entity.Id, 0, type).then(function (obj) {
      vm.saveObj = obj;
      popupFactory.update(function () {
        var deferred = $q.defer();
        taikhoanService.update(row.entity.Id, vm.saveObj, type)
        .then(function () {
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
  vm.action.update = vm.update;

  vm.delete = function (row, type, refreshGridCallBack) {
    var title = '';
    switch (type) {
      case 1:
        title = rss.DeleteButton + ' ' + rss.TitleTaiKhoan;
        break;
      case 2:
        title = rss.DeleteButton + ' ' + rss.TitleQuyenTrongUngDung;
        break;
    }
    popupFactory.setOptions({
      rss: rss,
      title: title,
      columnClass: 'col-md-offset-5 col-md-3',   
      icon: 'fa fa-times',
      content: rss.DeleteConfirm,
      scope: $scope,
    });

    popupFactory.delete(function () { 
      var deferred = $q.defer();
      taikhoanService.delete(type, row.entity.Id).then(function () {
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
  vm.quyenungdungExpand = {
    filterDefault: {
      IdUser : 0
    },
    action: {
      create: vm.create,
      delete: vm.delete
    },
    rowTemplate: cacquyenungdungTemplate,
    height: 300,
    rowExpandedStateChanged: function (row, event) {
      this.filterDefault.IdUser = row.entity.Id;
    },
    create: function () {
      console.log('zo');
    },
    Options: {
      colDefs: [{
        name: 'RoleName',
        displayName: 'Tên quyền',
      }, {
        name: 'RoleDescription',
        displayName: 'Mô tả',
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
    name: 'Username',
    displayName: 'Tài Khoản',
  }, {
    name: 'FullName',
    displayName: 'Họ và tên',
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
  }, {
    name: ' ',
    cellTemplate: gridCommandTaiKhoan,
    cellClass: 'grid-command',
    width: 60,
    enableSorting: false,
    enableFiltering: false,
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
export default taikhoanController;