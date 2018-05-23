import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';

function giaodienController ($scope, giaodienService, $timeout) {
  const vm = this;
  vm.title = giaodienService.title();
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
  }
  $timeout(function () {
    init();
  }, 200);  
}

/* @ngInject */
export default giaodienController;