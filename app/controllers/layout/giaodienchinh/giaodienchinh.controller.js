import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';

function giaodienchinhController ($scope, giaodienchinhService, $timeout) {
  const vm = this;
  vm.title = giaodienchinhService.title();
  console.log($scope);
  $('#abc').kendoButton();
  $('#calendar').kendoCalendar();

  function init() {
    function resizeFooter() {      
      if ($(document).width() > 767) {    
        if ($('body').hasClass('sidebar-collapse')) {         
          $('.main-footer').width($(document).width() - 64);                      
        }  
        else {
          $('.main-footer').width($(window).width() - 244);
          console.log('zo')
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
  init();  
}

/* @ngInject */
export default giaodienchinhController;