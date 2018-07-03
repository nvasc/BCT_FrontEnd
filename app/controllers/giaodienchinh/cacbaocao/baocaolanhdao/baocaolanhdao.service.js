function baocaolanhdaoService($rootScope, $timeout) {

  var service = {};
  var _init = function () {
    $(window, '.content-wrapper').unbind('resize');
  };
  service.init = _init;
  return service

}
/* @ngInject */
export default baocaolanhdaoService;
