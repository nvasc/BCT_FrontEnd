function dangnhapService($q, $state, oauthFactory) {
  var service = {};

  var _dangnhap = function (dangNhapModel) {
    var deferred = $q.defer();
    oauthFactory.login(dangNhapModel).then(function (data) {
      deferred.resolve(data);
    });
    return deferred.promise;
  };
  service.dangnhap = _dangnhap;
  return service
}
/* @ngInject */
export default dangnhapService;
