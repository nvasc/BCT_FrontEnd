function danhsachtruongService($q, $rootScope, $timeout, nonceProvider, dataProvider, 
  roleFactory) {  
  var service = {};
  var _providerName = 'thongtintruong';
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
    return roleFactory.getRoleFor('tttr');
  }

  var _get = function (id) { 
    var deferred = $q.defer();
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var danhsachtruongProvider = dataProvider.provider(_providerName);
      var obj = danhsachtruongProvider.get({id: id}, function () {
        obj.ApplicationType = obj.ApplicationType + '';
        deferred.resolve(obj);
      });       
    });
    return deferred.promise;
  };
  service.get = _get;

  var _create = function (obj) {
    var deferred = $q.defer();
    var danhsachtruongProvider = dataProvider.provider(_providerName, _getKey());
    danhsachtruongProvider.create({}, obj, function (res) {
      deferred.resolve(res);
    });    

    return deferred.promise;    
  };
  service.create = _create;

  var _update = function (id, obj) {
    var deferred = $q.defer();
    var danhsachtruongProvider = dataProvider.provider(_providerName, _getKey());
    danhsachtruongProvider.update({ id: id }, obj, function (res) {
      deferred.resolve(res);
    });    
    return deferred.promise;      
  };
  service.update = _update;

  var _delete = function (id) {    
    var deferred = $q.defer();    
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var danhsachtruongProvider = dataProvider.provider(_providerName, _getKey());
      danhsachtruongProvider.delete({ id: id }, function (res) {
        deferred.resolve(res);
      });
    });
    return deferred.promise; 
  };
  service.delete = _delete;

  return service

}
/* @ngInject */
export default danhsachtruongService;
