function kiemsoatchungService($rootScope, $timeout) {

  var service = {};
  var _init = function () {
    $(window, '.content-wrapper').unbind('resize');
    $timeout(function () { 
      if (!$.AdminLTE.layout) {       
        $('#header-thong-bao').slimScroll();
        $.AdminLTE.init();
      }        
      $.AdminLTE.layout.fix();
    });    
    
  };
  service.init = _init;
  return service

}
/* @ngInject */
export default kiemsoatchungService;
