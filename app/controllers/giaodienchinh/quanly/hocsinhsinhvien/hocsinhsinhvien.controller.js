
import gridCommand from './grid-command.html';
import saveTemplate from './save.html';
import colTrangThai from './col-trang-thai.html';
import _ from 'lodash';
import moment from 'moment';

function hocsinhsinhvienController ($q, $scope, hocsinhsinhvienService, popupFactory, roleFactory) {
  const vm = this;
  //Get Role
  vm.role = hocsinhsinhvienService.getRole();
  // Message ------------------
  var rss = {
    CreateTitle: 'Tạo mới học sinh - sinh viên',
    CreateButton: 'Tạo mới',
    CreateButtonClass: 'btn-primary',

    UpdateTitle: 'Cập nhật một học sinh - sinh viên',
    UpdateButton: 'Cập nhật',
    UpdateButtonClass: 'btn-primary',

    DeleteConfirm: 'Bạn có chắc chắn muốn xóa học sinh - sinh viên này?',
    DeleteTitle: 'Xóa một học sinh - sinh viên',
    DeleteButton: 'Xóa',
    DeleteButtonClass: 'btn-danger',

    CancelButton: 'Hủy',
    CancelButtonClass: 'btn-default'    
  }

  // Initial in screen ------------------
  hocsinhsinhvienService.init();
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
  vm.saveObj = {};
  // Column Define of Grid Component ------------------
  vm.colDefs = [];
  if (roleFactory.isAllAccess()) {
    vm.colDefs = [ {
      name: 'TenTruong',
      displayName: 'Trường',
      cellTooltip: function(row, col) {
        return row.entity.TenTruong;
      }
    } ];
  }
  vm.colDefs = vm.colDefs.concat([{
    name: 'Ma',
    displayName: 'Mã',
    width: 100,
  },{
    name: 'Ho',
    displayName: 'Họ',
  },{
    name: 'Ten',
    displayName: 'Tên',
    width: 75,
  },{
    name: 'TenHeDaoTao',
    displayName: 'Hệ đào tạo',
    width: 100,
  },
  {
    name: 'NgayNhapHoc',
    displayName: 'Ngày nhập học',
    cellFilter: 'date:\'dd/MM/yyyy\'',
    enableSorting: false,
    enableFiltering: false,
    width: 110,
  },
  {
    width: 90,
    name: 'NgayTotNghiep',
    displayName: 'Trạng Thái',
    cellTemplate: colTrangThai,
    cellClass: 'grid-text-align-center',
    enableSorting: false,
    enableFiltering: false,
  }, {
    name: ' ',
    cellTemplate: gridCommand,
    cellClass: 'grid-command',
    width: 60,
    enableSorting: false,
    enableFiltering: false,
  }]);

  // manually Filter in Grid Component ------------------
  vm.isFilter = false;
  vm.filter = function () {
    vm.isFilter = !vm.isFilter;
  }

  // CRUD for this function ------------------
  vm.saveObj = {};
  vm.action = {};

  var watchIdLoaiHinhDaoTao = null;
  function watchLoaiHinhDaoTao() {
    if (watchIdLoaiHinhDaoTao) {
      watchIdLoaiHinhDaoTao();
    }
     // Check role function
    watchIdLoaiHinhDaoTao =
    $scope.$watch(function () {
      return vm.saveObj.IdLoaiHinhDaoTao;
    }, function (nval, oval) {
      var val = parseInt(nval);
      if ((val !== parseInt(oval) || parseInt(nval) !== 0) && !_.isNaN(val)) {      
        hocsinhsinhvienService.getHeDaoTaoByLoaiHinhDaoTao(parseInt(nval)).then(function (result) {
          vm.saveObj.TenHeDaoTao = result.Text;
        });
      }
      //
    }, true);
  }

  vm.create = function (id, type, refreshGridCallBack) {
    popupFactory.setOptions({
      rss: rss,
      title: rss.CreateTitle,
      columnClass: 'col-md-offset-1 col-md-10',        
      icon: 'fa fa-plus', 
      content: saveTemplate,
      scope: $scope
    });

    hocsinhsinhvienService.get(0).then(function (obj) {      
      vm.saveObj = obj;
      watchLoaiHinhDaoTao();
      popupFactory.create(function () { 
        var deferred = $q.defer();
        hocsinhsinhvienService.create(vm.saveObj).then(function () {
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
      columnClass: 'col-md-offset-1 col-md-10',  
      icon: 'fa fa-edit',
      content: saveTemplate,
      scope: $scope,
    });
    hocsinhsinhvienService.get(row.entity.Id).then(function (obj) { 
      vm.saveObj = obj;     
      //vm.saveObj.NgaySinh = 'NgaySinh'  
      watchLoaiHinhDaoTao(); 
      popupFactory.update(function () { 
        var deferred = $q.defer();
        hocsinhsinhvienService.update(row.entity.Id, vm.saveObj).then(function () {
          deferred.resolve(true);
          if (refreshGridCallBack) {
            refreshGridCallBack();
          }   
        }, function () {
          deferred.resolve(false);  
        })              
        return deferred.promise;
      }, function () { vm.saveObj = {}; }, vm.role);
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
      hocsinhsinhvienService.delete(row.entity.Id).then(function () {
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

  vm.getTrangThai = function(obj) {
    if (obj.NgayNghiHoc !== null) {
      var namnghihoc = moment(obj.NgayNghiHoc).year();
      return 'Đã nghỉ học năm ' + namnghihoc
    }

    if (obj.NgayTotNghiep !== null) {
      var namtotnghiep = moment(obj.NgayTotNghiep).year();
      return 'Đã nghỉ học năm ' + namtotnghiep
    }

    if (obj.NgayNhapHoc !== null) {
      var namHocHienTai = moment();
      var ngayNhapHoc = moment(obj.NgayNhapHoc);
      var soNamHoc = namHocHienTai.diff(ngayNhapHoc, 'years');;
      if (soNamHoc < 1) {
        return 'Tuyển sinh mới';
      } else {
        return 'Đã học năm ' + (soNamHoc - 1);
      }
    }
  }  
}

/* @ngInject */
export default hocsinhsinhvienController;