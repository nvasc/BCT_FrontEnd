function nhatkyvaloiService($timeout) {

  var service = {};
  var _init = function () {
    $timeout(function () {
      $.AdminLTE.layout.fix();
    });   
  };
  service.init = _init;
  return service

}
/* @ngInject */
export default nhatkyvaloiService;