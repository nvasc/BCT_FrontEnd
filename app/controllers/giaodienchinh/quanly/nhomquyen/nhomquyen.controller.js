import colActive from './col-active.html';

import quyentrongungdungTemplate from './quyentrongungdungtemplete.html';
import gridCommandNhomQuyen from './grid-command-nhomquyen.html';
import gridCommandQuyenTrongTrongUngDung from './grid-command-quyentrongungdung.html';
import saveNhomQuyenTemplate from './save-nhomquyen.html';
import saveQuyenTrongUngDungTemplate from './grid-command-quyentrongungdung.html';

function nhomquyenController($q, $scope, nhomquyenService, popupFactory) {
  const vm = this;
  var rss = {
    NhomQuyen: 'Nhóm quyền ứng dụng',
    QuyenTrongUngDung: 'Quyền trong ứng dụng',
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
    CancelButtonClass: 'btn-default',
    Grid: {
      'SoThuTu': 'STT',
      'Ten': 'Tên',
      'TenHienThi': 'Tên Hiển Thị',
      'IsActive': 'Trạng Thái'
    }
  }

  // Initial in screen ------------------
  nhomquyenService.init();

  var _scopeGrid = null;
  // Scope of Grid
  vm.setScopeGrid = function (s) {
    _scopeGrid = s;
  };

  vm.action = {};
  vm.saveObj = {};
  vm.create = function (parentId, type, refreshGridCallBack) {
    var title = '';
    var template = '';
    switch (type) {
      case 1:
        title = rss.CreateTitle + ' ' + rss.NhomQuyen;
        template = saveNhomQuyenTemplate;
        break;
      case 2:
        title = rss.CreateTitle + ' ' + rss.QuyenTrongUngDung;
        template = saveQuyenTrongUngDungTemplate;
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

    nhomquyenService.get(0, parentId, type).then(function (obj) {
      vm.saveObj = obj;
      popupFactory.create(function () {
        var deferred = $q.defer();
        nhomquyenService.create(type, vm.saveObj).then(function () {
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

  vm.update = function (row, type, refreshGridCallBack) {
    var title = '';
    var template = '';
    switch (row.entity.Level) {
      case 1:
        title = rss.UpdateTitle + ' ' + rss.NhomQuyen;
        template = saveNhomQuyenTemplate;
        break;
      case 2:
        title = rss.UpdateTitle + ' ' + rss.QuyenTrongUngDung;
        template = saveQuyenTrongUngDungTemplate;
        break;
    }
    popupFactory.setOptions({
      rss: rss,
      title: title,
      columnClass: 'col-md-offset-3 col-md-6',
      icon: 'fa fa-edit',
      content: template,
      scope: $scope,
    });
    var parentId = row.entity.Level === 1 ? 0 : row.entity.Id;
    nhomquyenService.get(row.entity.Id, parentId,
      row.entity.Level).then(function (obj) {
        vm.saveObj = obj;
        popupFactory.update(function () {
          var deferred = $q.defer();
          nhomquyenService.update(row.entity.Id, row.entity.Level, vm.saveObj).then(function () {
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
      nhomquyenService.delete(row.entity.Id, type).then(function () {
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
  vm.hedaotaoExpand = {
    filterDefault: {
      Level: 2,
    },
    action: {
      create: vm.create,
      update: vm.update,
      delete: vm.delete
    },
    rowTemplate: quyentrongungdungTemplate,
    height: 300,
    rowExpandedStateChanged: function (row, event) {
      console.log(row, 1);
    },
    create: function () {
      console.log('zo');
    },
    Options: {
      colDefs: [{
        name: 'SoThuTu',
        width: 90,
        displayName: rss.Grid['SoThuTu'],
      }, {
        name: 'Ten',
        displayName: rss.Grid['Ten'],
      }, {
        name: 'TenHienThi',
        displayName: rss.Grid['TenHienThi'],
      }, {
        name: 'IsActive',
        displayName: rss.Grid['IsActive'],
        width: 90,
        cellTemplate: colActive,
        cellClass: 'grid-text-align-center',
        enableSorting: false,
        dataType: 3
      }, {
        name: ' ',
        cellTemplate: gridCommandQuyenTrongTrongUngDung,
        cellClass: 'grid-command',
        width: 60,
        enableSorting: false,
        enableFiltering: false,
      }],
    }
  }

  vm.colDefs = [{
    name: 'Ten',
    displayName: rss.Grid['Ten'],
  }, {
    name: 'MoTa',
    displayName: rss.Grid['MoTa'],
  }, {
    name: ' ',
    cellTemplate: gridCommandNhomQuyen,
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
export default nhomquyenController;
