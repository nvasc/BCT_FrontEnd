function giaodienchinhService($q ,loginInfoFactory, httpProvider) {
  var service = {}   
  service.getTenantName = function () {
    return loginInfoFactory.getTenantName();
  };

  service.getUserName = function () {
    return loginInfoFactory.getUserName();
  };
  service.getLoginName = function () {
    return loginInfoFactory.getLoginName();
  };
  service.getAppVersion = function () {
    return loginInfoFactory.getAppVersion();
  };

  var _changePassword = function(data) {
    httpProvider
    var deferred = $q.defer();
    httpProvider.put('api/taikhoan/ChangePassword', data, true)
    .then(function (result) {
      deferred.resolve(result);
    });
    return deferred.promise;
  }

  service.changePassword = _changePassword;

  var _taiKhoanCuaToi = function() {
    httpProvider
    var deferred = $q.defer();
    httpProvider.get('api/taikhoan/TaiKhoanCuaToi', null, true)
    .then(function (result) {
      deferred.resolve(result);
    });
    return deferred.promise;
  }

  service.taiKhoanCuaToi = _taiKhoanCuaToi;

  var _updateTaiKhoanCuaToi = function(data) {
    httpProvider
    var deferred = $q.defer();
    httpProvider.put('api/taikhoan/UpdateTaiKhoanCuaToi', data, true)
    .then(function (result) {
      deferred.resolve(result);
    });
    return deferred.promise;
  }

  service.updateTaiKhoanCuaToi = _updateTaiKhoanCuaToi;

  return service;

}
/* @ngInject */
export default giaodienchinhService;
