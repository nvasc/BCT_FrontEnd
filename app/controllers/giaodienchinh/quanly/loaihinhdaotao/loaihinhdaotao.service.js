function loaihinhdaotaoService($q, $rootScope, $timeout, httpProvider, 
  dataProvider, nonceProvider) {
  var service = {};
  var _apiModel = 'api/loaihinhdaotao';
  var _providerName = 'loaihinhdaotao';

  var _init = function () {
    $timeout(function () {
      $.AdminLTE.layout.fix();
    });
  };
  service.init = _init;

  var _key = '';
  var _getKey = function () {
    return _key;
  }
  service.getKey = _getKey;
  var _setKey = function (key) {
    _key = key;
  }
  service.setKey = _setKey;
  

  var _get = function (id, parentId, level) {
    var deferred = $q.defer();
    var url = _apiModel + `?id=${id}&parentId=${parentId}&level=${level}`;
    httpProvider.get(url, true).then(function (result) {
      deferred.resolve(result);
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
    clientProvider.update({
      id: id
    }, obj, function (res) {
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
      clientProvider.delete({
        id: id
      }, function (res) {
        deferred.resolve(res);
      });
    });
    return deferred.promise;
  };
  service.delete = _delete;

  return service

}
/* @ngInject */
export default loaihinhdaotaoService;
