function kiemsoatchungService($rootScope, $timeout) {

  var service = {};
  var _init = function () {
    $timeout(function () { 
      $.AdminLTE.pushMenu.fixFooter();
    });    
  };
  service.init = _init;
  return service

}
/* @ngInject */
export default kiemsoatchungService;
