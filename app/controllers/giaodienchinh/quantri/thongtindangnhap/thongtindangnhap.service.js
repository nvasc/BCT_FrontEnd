function thongtindangnhapService($q, $rootScope, $timeout, nonceProvider, dataProvider, 
  roleFactory) {  
  var service = {};
  var _providerName = 'tokeninfor';
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
    return roleFactory.getRoleFor('ttdn');
  }

  var _get = function (id) { 
    var deferred = $q.defer();
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var thongtindangnhapProvider = dataProvider.provider(_providerName);
      var obj = thongtindangnhapProvider.get({id: id}, function () {
        obj.ApplicationType = obj.ApplicationType + '';
        deferred.resolve(obj);
      });       
    });
    return deferred.promise;
  };
  service.get = _get;

  var _delete = function (id) {    
    var deferred = $q.defer();    
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var thongtindangnhapProvider = dataProvider.provider(_providerName, _getKey());
      thongtindangnhapProvider.delete({ id: id }, function (res) {
        deferred.resolve(res);
      });
    });
    return deferred.promise; 
  };
  service.delete = _delete;

  return service

}
/* @ngInject */
export default thongtindangnhapService;
