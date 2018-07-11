function baocaolanhdaoService($q, $rootScope, $timeout, nonceProvider, dataProvider) {

  var service = {};
  var _init = function () {
    $(window, '.content-wrapper').unbind('resize');
    $timeout(function () {
      $.AdminLTE.layout.fix();
      
    });
  };
  service.init = _init;

  var _key = '';
  var _getKey = function () {return _key;}
  service.getKey = _getKey;
  var _setKey = function (key) { _key = key;}
  service.setKey = _setKey;

  var _get = function (id) { 
    var deferred = $q.defer();
    nonceProvider.getForVAFT().then(function (key) {
      _setKey(key);
      var baocaolanhdaoProvider = dataProvider.provider('baocaolanhdao');
      var obj = baocaolanhdaoProvider.get({id: id}, function () {
        obj.ApplicationType = obj.ApplicationType + '';
        deferred.resolve(obj);
      });       
    });
    return deferred.promise;
  };
  service.get = _get;

  return service

}
/* @ngInject */
export default baocaolanhdaoService;
