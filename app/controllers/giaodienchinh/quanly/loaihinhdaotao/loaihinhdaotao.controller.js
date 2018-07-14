import hedaotaoTemplete from './hedaotaotemplete.html';
import loaidaotaoTemplete from './loaidaotaotemplete.html';
import colActive from './col-active.html';
import gridCommandHedaotao from './grid-command-hedaotao.html';
import gridCommandLoaihinhdaotao from './grid-command-loaihinhdaotao.html';
import saveTemplate from './save.html';

function loaihinhdaotaoController($q, $scope, loaihinhdaotaoService, popupFactory) {
  const vm = this;
  //Get Role
  vm.role = loaihinhdaotaoService.getRole();
  //Message
  var rss = {
    CapBacDaoTao: 'cấp bậc đào tạo',
    HeDaoTao: 'hệ đào tạo',
    LoaiHinhDaoTao: 'loại hình đào tạo',
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
      'Ma': 'Mã',
      'TenHienThi': 'Tên Hiển Thị',
      'IsActive': 'Trạng Thái'
    }
  }

  // Initial in screen ------------------
  loaihinhdaotaoService.init();

  var _scopeGrid = null;
  // Scope of Grid
  vm.setScopeGrid = function (s) {
    _scopeGrid = s;
  };

  vm.action = {};
  vm.saveObj = {};
  vm.create = function (parentId, type, refreshGridCallBack) {  
    var title = '';
    switch (type) {
      case 1:
        title = rss.CreateTitle + ' ' + rss.CapBacDaoTao
        break;
      case 2:
        title = rss.CreateTitle + ' ' + rss.HeDaoTao
        break;
      case 3:
        title = rss.CreateTitle + ' ' + rss.LoaiHinhDaoTao
        break;
    }

    popupFactory.setOptions({
      rss: rss,
      title: title,
      columnClass: 'col-md-offset-3 col-md-6',
      icon: 'fa fa-plus',
      content: saveTemplate,
      scope: $scope,
    });    
    loaihinhdaotaoService.get(0, parentId, type).then(function (obj) {
      vm.saveObj = obj;
      popupFactory.create(function () {
        var deferred = $q.defer();
        loaihinhdaotaoService.create(vm.saveObj).then(function () {
          deferred.resolve(true);
          if (refreshGridCallBack) {
            refreshGridCallBack();
          }
          else {            
            if (_scopeGrid.gridExpand) {
              _scopeGrid.gridExpand.refresh();  
            }    
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
    switch (row.entity.Level) {
      case 1:
        title = rss.UpdateTitle + ' ' + rss.CapBacDaoTao
        break;
      case 2:
        title = rss.UpdateTitle + ' ' + rss.HeDaoTao
        break;
      case 3:
        title = rss.UpdateTitle + ' ' + rss.LoaiHinhDaoTao
        break;
    }
    popupFactory.setOptions({
      rss: rss,
      title: title,
      columnClass: 'col-md-offset-3 col-md-6',
      icon: 'fa fa-edit',
      content: saveTemplate,
      scope: $scope,
    });
    var parentId = row.entity.Level === 1 ? 0 :
      (row.entity.Level === 2 ? row.entity.IdCapBacDaoTao : row.entity.IdHeDaoTao);
    loaihinhdaotaoService.get(row.entity.Id, parentId,
      row.entity.Level).then(function (obj) {
        vm.saveObj = obj;
        vm.saveObj.Level = row.entity.Level;
        popupFactory.update(function () {
          var deferred = $q.defer();
          loaihinhdaotaoService.update(row.entity.Id, vm.saveObj).then(function () {
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
      loaihinhdaotaoService.delete(row.entity.Id, row.entity.Level).then(function () {
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
    rowTemplate: hedaotaoTemplete,
    height: 300,
    rowExpandedStateChanged: function (row, event) {
      console.log(row, 1);
    },    
    Options: {
      colDefs: [{
        name: 'Ma',
        displayName: rss.Grid['Ma'],
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
        cellTemplate: gridCommandHedaotao,
        cellClass: 'grid-command',
        width: 60,
        enableSorting: false,
        enableFiltering: false,
      }],
    },
    loaidaotaoExpand: {
      filterDefault: {
        Level: 3,
      },
      action: {
        create: vm.create,
        update: vm.update,
        delete: vm.delete
      },
     
      rowTemplate: loaidaotaoTemplete,
      height: 300,
      rowExpandedStateChanged: function (row, event) {
        console.log(row, 2);
      },
      Options: {
        colDefs: [{
          name: 'Ma',
          displayName: rss.Grid['Ma'],
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
          cellTemplate: gridCommandLoaihinhdaotao,
          cellClass: 'grid-command',
          width: 60,
          enableSorting: false,
          enableFiltering: false,
        }],
      }
    }
  }

  vm.colDefs = [{
    name: 'Ma',
    displayName: rss.Grid['Ma'],
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
    cellTemplate: gridCommandHedaotao,
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
export default loaihinhdaotaoController;
