function cauhinhbaocaoService($q, $rootScope, $timeout, httpProvider, 
  dataProvider, nonceProvider, roleFactory) {
  var service = {};
  var _apiModel = 'api/cauhinhbaocao';
  var _providerName = 'cauhinhbaocao';

  var _init = function () {
    $(window, '.content-wrapper').unbind('resize');
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
  
  service.getRole = function () {
    return roleFactory.getRoleFor('chbc');
  }

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

  var _delete = function (id, level) {
    var deferred = $q.defer();
    var url = _apiModel + `?id=${id}&level=${level}`;
    httpProvider.delete(url, true).then(function (result) {
      deferred.resolve(result); 
    });
    return deferred.promise;
  };
  service.delete = _delete;

  return service

}
/* @ngInject */
export default cauhinhbaocaoService;
