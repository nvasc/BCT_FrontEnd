function clientService($q, $rootScope, $timeout, nonceProvider, dataProvider) {  
  var service = {};
  var _providerName = 'client';
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

  var _get = function (id) { 
    var deferred = $q.defer();
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var clientProvider = dataProvider.provider(_providerName);
      var obj = clientProvider.get({id: id}, function () {
        obj.ApplicationType = obj.ApplicationType + '';
        deferred.resolve(obj);
      });       
    });
    return deferred.promise;
  };
  service.get = _get;

  var _create = function (obj) {
    var deferred = $q.defer();
    var clientProvider = dataProvider.provider(_providerName, _getKey());
    clientProvider.create({}, obj, function (res) {
      deferred.resolve(res);
    });    

    return deferred.promise;    
  };
  service.create = _create;

  var _update = function (id, obj) {
    var deferred = $q.defer();
    var clientProvider = dataProvider.provider(_providerName, _getKey());
    clientProvider.update({ id: id }, obj, function (res) {
      deferred.resolve(res);
    });    
    return deferred.promise;      
  };
  service.update = _update;

  var _delete = function (id) {    
    var deferred = $q.defer();    
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var clientProvider = dataProvider.provider(_providerName, _getKey());
      clientProvider.delete({ id: id }, function (res) {
        deferred.resolve(res);
      });
    });
    return deferred.promise; 
  };
  service.delete = _delete;

  return service

}
/* @ngInject */
export default clientService;
