function clientService($timeout, $rootScope) {

  var service = {};
  var _init = function () {
    $timeout(function () {
      $.AdminLTE.layout.fix();
      console.log('service');
    });
  };
  service.init = _init;
  return service

}
/* @ngInject */
export default clientService;
