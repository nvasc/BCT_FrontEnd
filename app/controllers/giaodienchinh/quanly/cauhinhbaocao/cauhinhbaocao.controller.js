import loaihinhlamviecTemplete from './loaihinhlamviectemplete.html';
import loaihinhlamviecchitietTemplete from './loaihinhlamviecchitiettemplete.html';
import colActive from './col-active.html';
import gridCommandLoaihinhlamviec from './grid-command-loaihinhlamviec.html';
import gridCommandLoaihinhlamviecchitiet from './grid-command-loaihinhlamviecchitiet.html';
import saveTemplate from './save.html';

function cauhinhbaocaoController($q, $scope, cauhinhbaocaoService, popupFactory) {
  const vm = this;
  var rss = {
    LoaiNhanVien: 'loại nhân viên',
    LoaiHinhLamViec: 'loại hình làm việc',
    LoaiHinhLamViecChiTiet: 'loại hình làm việc chi tiết',
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
  cauhinhbaocaoService.init();

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
        title = rss.CreateTitle + ' ' + rss.LoaiNhanVien
        break;
      case 2:
        title = rss.CreateTitle + ' ' + rss.LoaiHinhLamViec
        break;
      case 3:
        title = rss.CreateTitle + ' ' + rss.LoaiHinhLamViecChiTiet
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
    cauhinhbaocaoService.get(0, parentId, type).then(function (obj) {
      vm.saveObj = obj;
      popupFactory.create(function () {
        var deferred = $q.defer();
        cauhinhbaocaoService.create(vm.saveObj).then(function () {
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
        title = rss.UpdateTitle + ' ' + rss.LoaiNhanVien
        break;
      case 2:
        title = rss.UpdateTitle + ' ' + rss.LoaiHinhLamViec
        break;
      case 3:
        title = rss.UpdateTitle + ' ' + rss.LoaiHinhLamViecChiTiet
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
      (row.entity.Level === 2 ? row.entity.IdLoaiNhanVien : row.entity.IdLoaiHinhLamViec);
    cauhinhbaocaoService.get(row.entity.Id, parentId,
      row.entity.Level).then(function (obj) {
        vm.saveObj = obj;
        popupFactory.update(function () {
          var deferred = $q.defer();
          cauhinhbaocaoService.update(row.entity.Id, vm.saveObj).then(function () {
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
  vm.delete = function (row) {
    console.log(row, 'delete');
  }
  vm.action.delete = vm.delete;

  // Grid defined ------------------------
  vm.loaihinhlamviecExpand = {
    filterDefault: {
      Level: 2,
    },
    action: {
      create: vm.create,
      update: vm.update,
      delete: vm.delete
    },    
    rowTemplate: loaihinhlamviecTemplete,
    height: 300,
    rowExpandedStateChanged: function (row, event) {
      console.log(row, 1);
    },
    create: function () {
      console.log('zo');
    },
    Options: {
      colDefs: [{
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
        cellTemplate: gridCommandLoaihinhlamviec,
        cellClass: 'grid-command',
        width: 60,
        enableSorting: false,
        enableFiltering: false,
      }],
    },
    loaihinhlamviecchitietExpand: {
      filterDefault: {
        Level: 3,
      },
      action: {
        create: vm.create,
        update: vm.update,
        delete: vm.delete
      },
     
      rowTemplate: loaihinhlamviecchitietTemplete,
      height: 300,
      rowExpandedStateChanged: function (row, event) {
        console.log(row, 2);
      },
      Options: {
        colDefs: [{
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
          cellTemplate: gridCommandLoaihinhlamviecchitiet,
          cellClass: 'grid-command',
          width: 60,
          enableSorting: false,
          enableFiltering: false,
        }],
      }
    }
  }

  vm.colDefs = [{
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
    cellTemplate: gridCommandLoaihinhlamviec,
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
export default cauhinhbaocaoController;
