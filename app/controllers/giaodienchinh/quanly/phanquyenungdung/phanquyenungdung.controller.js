import colCreate from './col-create.html';
import colUpdate from './col-update.html';
import colRead from './col-read.html';
import colDelete from './col-delete.html';


import chucnangTemplete from './chucnangTemplete.html';
import gridCommandphanquyenungdung from './grid-command-phanquyenungdung.html';
import gridCommandchucnang from './grid-command-chucnang.html';
import savephanquyenungdung from './save-phanquyenungdung.html';
import saveChucnang from './save-chucnang.html';

function phanquyenungdungController($q, $scope, phanquyenungdungService, popupFactory) {
  const vm = this;
  var rss = {
    phanquyenungdung: 'các quyền trong ứng dụng',
    chucnang: 'quyền trong ứng dụng',
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
      'Name': 'Tên',
      'Description': 'Mô Tả'
    }
  }

  // Initial in screen ------------------
  phanquyenungdungService.init();

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
        title = rss.CreateTitle + ' ' + rss.phanquyenungdung;
        template = savephanquyenungdung;
        break;
      case 2:
        title = rss.CreateTitle + ' ' + rss.chucnang;
        template = saveChucnang;

        vm.defaultFilter = {
          RoleId : parentId,
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

    phanquyenungdungService.get(0, parentId, type).then(function (obj) {
      vm.saveObj = obj;
      vm.saveObj.IdRole = parentId;
      vm.saveObj.roleObj = { RoleId: parentId };
      popupFactory.create(function () {
        var deferred = $q.defer();
        phanquyenungdungService.create(type, vm.saveObj).then(function () {
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
    var title = '';
    var template = '';

    switch (type) {
      case 1:
        title = rss.UpdateTitle + ' ' + rss.phanquyenungdung;
        template = savephanquyenungdung;
        break;
      case 2:
        title = rss.UpdateTitle + ' ' + rss.chucnang;
        template = saveChucnang;
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

    var parentId = type === 1 ? 0 : row.entity.Id;
    phanquyenungdungService.get(row.entity.Id, parentId, 
      type).then(function (obj) {
        vm.saveObj = obj;
        vm.saveObj.roleObj = { QueryId: row.entity.Id, RoleId: row.entity.IdRole };
        popupFactory.update(function () {
          var deferred = $q.defer();
          phanquyenungdungService.update(row.entity.Id, vm.saveObj, type)
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
      phanquyenungdungService.delete(row.entity.Id, type).then(function () {
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
  vm.chucnangExpand = {
    filterDefault: {
      Level: 2,
    },
    action: {
      create: vm.create,
      update: vm.update,
      delete: vm.delete
    },
    rowTemplate: chucnangTemplete,
    height: 300,
    rowExpandedStateChanged: function (row, event) {
      
    },
    create: function () {
      console.log('zo');
    },
    Options: {
      colDefs: [{
        name: 'DocumentName',
        displayName: 'Tên',
      }, {
        name: 'AllowRead',
        displayName: 'Xem',
        width: 90,
        cellTemplate: colRead,
        cellClass: 'grid-text-align-center',
        enableSorting: false,
        dataType: 3
      }, {
        name: 'AllowCreate',
        displayName: 'Tạo mới',
        width: 90,
        cellTemplate: colCreate,
        cellClass: 'grid-text-align-center',
        enableSorting: false,
        dataType: 3
      },{
        name: 'AllowUpdate',
        displayName: 'Cập nhật',
        width: 90,
        cellTemplate: colUpdate,
        cellClass: 'grid-text-align-center',
        enableSorting: false,
        dataType: 3
      },{
        name: 'AllowDelete',
        displayName: 'Xóa',
        width: 90,
        cellTemplate: colDelete,
        cellClass: 'grid-text-align-center',
        enableSorting: false,
        dataType: 3
      },{
        name: ' ',
        cellTemplate: gridCommandchucnang,
        cellClass: 'grid-command',
        width: 60,
        enableSorting: false,
        enableFiltering: false,
      }],
    }
  }

  vm.colDefs = [{
    name: 'Name',
    displayName: rss.Grid['Name'],
  }, {
    name: 'Description',
    displayName: rss.Grid['Description'],
  }, {
    name: ' ',
    cellTemplate: gridCommandphanquyenungdung,
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
export default phanquyenungdungController;
