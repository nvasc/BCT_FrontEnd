function apiService($timeout, $rootScope) {

  var service = {};

  var _init = function () {
    $(window, '.content-wrapper').unbind('resize');
    $timeout(function () {
      $.AdminLTE.layout.fix();
      
    });
  };
  service.init = _init;
  return service

}
/* @ngInject */
export default apiService;
