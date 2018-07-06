function dichvuchayngamService($q, $rootScope, $timeout, 
  nonceProvider, dataProvider, httpProvider) {
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
      var dichvuchayngamProvider = dataProvider.provider('runtimeservice');
      var obj = dichvuchayngamProvider.get({id: id}, function () {        
        deferred.resolve(obj);
      });       
    });
    return deferred.promise;
  };
  service.get = _get;

  var _create = function (obj) {
    var deferred = $q.defer();
    var dichvuchayngamProvider = dataProvider.provider('runtimeservice', _getKey());
    dichvuchayngamProvider.create({}, obj, function (res) {
      deferred.resolve(res);
    });    

    return deferred.promise;    
  };
  service.create = _create;

  var _update = function (id, obj) {
    var deferred = $q.defer();
    var dichvuchayngamProvider = dataProvider.provider('runtimeservice', _getKey());
    dichvuchayngamProvider.update({ id: id }, obj, function (res) {
      deferred.resolve(res);
    });    
    return deferred.promise;      
  };
  service.update = _update;

  var _delete = function (id) {    
    var deferred = $q.defer();    
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var dichvuchayngamProvider = dataProvider.provider('runtimeservice', _getKey());
      dichvuchayngamProvider.delete({ id: id }, function (res) {
        deferred.resolve(res);
      });
    });
    return deferred.promise; 
  };
  service.delete = _delete;

  var _start = function (id) {
    var deferred = $q.defer();
    httpProvider.put('api/runtimeservice/start?jobId=' + id, null, true).then(function (result) {
      deferred.resolve(result);
    });    
    return deferred.promise;
  };
  service.start = _start;

  var _stop = function (id) {
    var deferred = $q.defer();
    httpProvider.put('api/runtimeservice/stop?jobId=' + id,null, true).then(function (result) {
      deferred.resolve(result);
    });    
    return deferred.promise;
  };
  service.stop = _stop;

  return service
}
/* @ngInject */
export default dichvuchayngamService;
