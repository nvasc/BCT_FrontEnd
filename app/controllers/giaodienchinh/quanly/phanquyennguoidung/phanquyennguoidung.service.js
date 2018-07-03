function phanquyennguoidungService($q, $rootScope, $timeout, nonceProvider, dataProvider) {
  var service = {};

  var _init = function () {
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

  var _get = function (id) { 
    var deferred = $q.defer();
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var phanquyennguoidungProvider = dataProvider.provider('userrole');
      var obj = phanquyennguoidungProvider.get({id: id}, function () {
        obj.ApplicationType = obj.ApplicationType + '';
        deferred.resolve(obj);
      });       
    });
    return deferred.promise;
  };
  service.get = _get;

  var _create = function (type, obj) {
    var deferred = $q.defer();
    var phanquyennguoidungProvider = 
    dataProvider.provider('userrole/PostDataForPhanQuyenNguoiDung', _getKey());
    phanquyennguoidungProvider.create({}, obj, function (res) {
      deferred.resolve(res);
    });    

    return deferred.promise;    
  };
  service.create = _create;

  var _delete = function (id) {    
    var deferred = $q.defer();    
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var phanquyennguoidungProvider = dataProvider.provider('userrole', _getKey());
      phanquyennguoidungProvider.delete({ id: id }, function (res) {
        deferred.resolve(res);
      });
    });
    return deferred.promise; 
  };
  service.delete = _delete;

  return service
}
/* @ngInject */
export default phanquyennguoidungService;
