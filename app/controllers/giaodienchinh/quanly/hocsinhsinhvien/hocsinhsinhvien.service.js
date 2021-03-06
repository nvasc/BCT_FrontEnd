import moment from 'moment';

function hocsinhsinhvienService($q, $rootScope, $timeout, nonceProvider, 
  dataProvider, roleFactory, httpProvider) {
  var service = {};

  var _init = function () {
    $(window, '.content-wrapper').unbind('resize');
    $timeout(function () {
      $.AdminLTE.layout.fix();      
    });
  };
  var _key = '';
  var _getKey = function () {return _key;}
  service.getKey = _getKey;
  var _setKey = function (key) { _key = key;}
  service.setKey = _setKey;
  service.init = _init;

  service.getRole = function () {
    return roleFactory.getRoleFor('hssv');
  }

  var _get = function (id) { 
    var deferred = $q.defer();
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var hocsinhsinhvienProvider = dataProvider.provider('hocsinhsinhvien');
      var obj = hocsinhsinhvienProvider.get({id: id}, function () {
        obj.NgaySinh = moment(obj.NgaySinh);
        obj.NgayNhapHoc = moment(obj.NgayNhapHoc);
        obj.NgayTotNghiep = moment(obj.NgayTotNghiep);
        obj.NgayNghiHoc = moment(obj.NgayNghiHoc);
        deferred.resolve(obj);
      });       
    });
    return deferred.promise;
  };
  service.get = _get;

  var _create = function (obj) {
    var deferred = $q.defer();
    var hocsinhsinhvienProvider = dataProvider.provider('hocsinhsinhvien', _getKey());
    hocsinhsinhvienProvider.create({}, obj, function (res) {
      deferred.resolve(res);
    });    

    return deferred.promise;    
  };
  service.create = _create;

  var _update = function (id, obj) {
    var deferred = $q.defer();
    var hocsinhsinhvienProvider = dataProvider.provider('hocsinhsinhvien', _getKey());
    hocsinhsinhvienProvider.update({ id: id }, obj, function (res) {
      deferred.resolve(res);
    });    
    return deferred.promise;      
  };
  service.update = _update;

  var _delete = function (id) {    
    var deferred = $q.defer();    
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var hocsinhsinhvienProvider = dataProvider.provider('hocsinhsinhvien', _getKey());
      hocsinhsinhvienProvider.delete({ id: id }, function (res) {
        deferred.resolve(res);
      });
    });
    return deferred.promise; 
  };
  service.delete = _delete;

  var _getHeDaoTaoByLoaiHinhDaoTao = function (id) {
    var deferred = $q.defer();    

    httpProvider.get('api/loaihinhdaotao/GetCapBacDaoTaoByLoaiHinhDaoTaoId?id=' + id, false)
    .then(function (result) {
      deferred.resolve(result);
    });    
    return deferred.promise;
  }
  service.getHeDaoTaoByLoaiHinhDaoTao = _getHeDaoTaoByLoaiHinhDaoTao;
  return service
}
/* @ngInject */
export default hocsinhsinhvienService;
