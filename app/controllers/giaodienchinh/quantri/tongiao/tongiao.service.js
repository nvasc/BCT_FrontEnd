function tongiaoService($q, $rootScope, $timeout, nonceProvider, dataProvider) {
  var service = {};

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
      var tongiaoProvider = dataProvider.provider('tongiao');
      var obj = tongiaoProvider.get({id: id}, function () {
        obj.ApplicationType = obj.ApplicationType + '';
        deferred.resolve(obj);
      });       
    });
    return deferred.promise;
  };
  service.get = _get;

  var _create = function (obj) {
    var deferred = $q.defer();
    var tongiaoProvider = dataProvider.provider('tongiao', _getKey());
    tongiaoProvider.create({}, obj, function (res) {
      deferred.resolve(res);
    });    

    return deferred.promise;    
  };
  service.create = _create;

  var _update = function (id, obj) {
    var deferred = $q.defer();
    var tongiaoProvider = dataProvider.provider('tongiao', _getKey());
    tongiaoProvider.update({ id: id }, obj, function (res) {
      deferred.resolve(res);
    });    
    return deferred.promise;      
  };
  service.update = _update;

  var _delete = function (id) {    
    var deferred = $q.defer();    
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var tongiaoProvider = dataProvider.provider('tongiao', _getKey());
      tongiaoProvider.delete({ id: id }, function (res) {
        deferred.resolve(res);
      });
    });
    return deferred.promise; 
  };
  service.delete = _delete;

  return service
}
/* @ngInject */
export default tongiaoService;
