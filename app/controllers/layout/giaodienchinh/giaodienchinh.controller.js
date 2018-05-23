
function giaodienchinhController ($scope, giaodienchinhService, $timeout) {
  const vm = this;
  vm.title = giaodienchinhService.title();
  vm.init = function () {
    function resizeFooter() {      
      if ($(document).width() > 767) {    
        if ($('body').hasClass('sidebar-collapse')) {         
          $('.main-footer').width($(document).width() - 64);                      
        }  
        else {
          $('.main-footer').width($(window).width() - 244);
        }
      }
      else {
        $('.main-footer').width($(document).width());   
      }
    };  

    $(document).on('click', '[data-toggle="push-menu"]', function (e) {
      resizeFooter();
    });
    resizeFooter();  

    $('#header-thong-bao').slimScroll();
    $.AdminLTE.init();
  }

  $timeout(function () {
    vm.init();
  });  
}

/* @ngInject */
export default giaodienchinhController;