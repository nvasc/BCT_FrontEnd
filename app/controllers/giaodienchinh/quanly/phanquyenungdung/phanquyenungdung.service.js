function phanquyenungdungService($q, $rootScope, $timeout, httpProvider, 
  dataProvider, nonceProvider) {
  var service = {};
  var _apiphanquyenungdung = 'api/role';
  var _apiQuyentrongChuongTrinh = 'api/roledocumentfunction';
  var _providerphanquyenungdung = 'role';
  var _providerQuyenTrongChuongTrinh = 'roledocumentfunction';

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
    var url = '';
    switch (level) {
      case 1:
        url = _apiphanquyenungdung + `?id=${id}`;
        break;
      case 2:
        url = _apiQuyentrongChuongTrinh + `?id=${id}&parentId=${parentId}&level=${level}`;
        break;
    }

    httpProvider.get(url, true).then(function (result) {
      deferred.resolve(result);
    });    
    return deferred.promise;
  };
  service.get = _get;

  var _create = function (level, obj) {
    var deferred = $q.defer();
    var _providerName = '';
    switch (level) {
      case 1:
        _providerName = _providerphanquyenungdung;
        break;
      case 2:
        _providerName = _providerQuyenTrongChuongTrinh;
        break;
    }
    var clientProvider = dataProvider.provider(_providerName, _getKey());
    clientProvider.create({}, obj, function (res) {
      deferred.resolve(res);
    });

    return deferred.promise;
  };
  service.create = _create;

  var _update = function (id, obj, level) {
    var deferred = $q.defer();
    var _providerName = '';

    switch (level) {
      case 1:
        _providerName = _providerphanquyenungdung;
        break;
      case 2:
        _providerName = _providerQuyenTrongChuongTrinh;
        break;
    }

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
    var _providerName = '';

    switch (level) {
      case 1:
        _providerName = _providerphanquyenungdung;
        break;
      case 2:
        _providerName = _providerQuyenTrongChuongTrinh;
        break;
    }
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
export default phanquyenungdungService;
