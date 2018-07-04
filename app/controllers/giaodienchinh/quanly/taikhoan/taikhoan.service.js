function taikhoanService($q, $rootScope, $timeout, nonceProvider, dataProvider) {
  var service = {};
  var _providerTaiKhoan = 'taikhoan';
  var _providerPhanQuyenNguoidung = 'userrole';

  var _init = function () {
    $timeout(function () {
      $.AdminLTE.layout.fix();
      $(window, '.content-wrapper').unbind('resize');
    });
  };
  var _key = '';
  var _getKey = function () {return _key;}
  service.getKey = _getKey;
  var _setKey = function (key) { _key = key;}
  service.setKey = _setKey;
  service.init = _init;

  var _get = function (id) { 
    var deferred = $q.defer();
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var taikhoanProvider = dataProvider.provider('taikhoan');
      var obj = taikhoanProvider.get({id: id}, function () {
        obj.ApplicationType = obj.ApplicationType + '';
        deferred.resolve(obj);
      });       
    });
    return deferred.promise;
  };
  service.get = _get;

  var _create = function (type, obj) {
    var _provider = '';
    if (type === 1) {
      _provider = _providerTaiKhoan;
    } else {
      _provider = _providerPhanQuyenNguoidung + '/PostDataForTaiKhoan';
    }
    var deferred = $q.defer();
    var taikhoanProvider = dataProvider.provider(_provider, _getKey());
    taikhoanProvider.create({}, obj, function (res) {
      deferred.resolve(res);
    });    

    return deferred.promise;    
  };
  service.create = _create;

  var _update = function (id, obj) {
    var deferred = $q.defer();
    var taikhoanProvider = dataProvider.provider('taikhoan', _getKey());
    taikhoanProvider.update({ id: id }, obj, function (res) {
      deferred.resolve(res);
    });    
    return deferred.promise;      
  };
  service.update = _update;

  var _delete = function (type, id) {    
    var deferred = $q.defer();    
    var _provider = '';
    if (type === 1) {
      _provider = _providerTaiKhoan;
    } else {
      _provider = _providerPhanQuyenNguoidung;
    }

    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var taikhoanProvider = dataProvider.provider(_provider, _getKey());
      taikhoanProvider.delete({ id: id }, function (res) {
        deferred.resolve(res);
      });
    });
    return deferred.promise; 
  };
  service.delete = _delete;

  return service
}
/* @ngInject */
export default taikhoanService;
