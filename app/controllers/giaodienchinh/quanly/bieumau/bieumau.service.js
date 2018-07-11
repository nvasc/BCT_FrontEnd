function bieumauService($q, $rootScope, $timeout, nonceProvider, dataProvider, httpProvider) {
  var service = {};
  var modelName = 'bieumauchuan';
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
      var bieumauProvider = dataProvider.provider(modelName);
      var obj = bieumauProvider.get({id: id}, function () {
        obj.ApplicationType = obj.ApplicationType + '';
        deferred.resolve(obj);
      });       
    });
    return deferred.promise;
  };
  service.get = _get;

  var _create = function (obj) {
    var deferred = $q.defer();
    var bieumauProvider = dataProvider.provider(modelName, _getKey());
    bieumauProvider.create({}, obj, function (res) {
      deferred.resolve(res);
    });    

    return deferred.promise;    
  };
  service.create = _create;

  var _update = function (id, obj) {
    var deferred = $q.defer();
    var bieumauProvider = dataProvider.provider(modelName, _getKey());
    bieumauProvider.update({ id: id }, obj, function (res) {
      deferred.resolve(res);
    });    
    return deferred.promise;      
  };
  service.update = _update;

  var _delete = function (id) {    
    var deferred = $q.defer();    
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var bieumauProvider = dataProvider.provider(modelName, _getKey());
      bieumauProvider.delete({ id: id }, function (res) {
        deferred.resolve(res);
      });
    });
    return deferred.promise; 
  };
  service.delete = _delete;

  var _getConfig = function (id) { 
    httpProvider
    var deferred = $q.defer();
    httpProvider.get('api/bieumauchuan/getconfig?id=' + id, true)
    .then(function (result) {
      deferred.resolve(result);
    });
    return deferred.promise;
  };
  service.getConfig = _getConfig;

  var _saveConfig = function (id, data) { 
    httpProvider
    var deferred = $q.defer();
    httpProvider.put('api/bieumauchuan/saveconfig?id=' + id, data, true)
    .then(function (result) {
      deferred.resolve(result);
    });
    return deferred.promise;
  };
  service.saveConfig = _saveConfig;

  return service
}
/* @ngInject */
export default bieumauService;
