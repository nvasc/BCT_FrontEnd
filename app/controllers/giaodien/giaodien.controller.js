import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';

function giaodienController ($scope, giaodienService) {
  const vm = this;
  vm.title = giaodienService.title();
  console.log($scope);
  $('#abc').kendoButton();
  $('#calendar').kendoCalendar();

  $(document).ready(function () {
    function resizeFooter() {
      if ($('body').hasClass('sidebar-collapse')) {      
        $('.main-footer').width($(document).width() - 80);
      }  
      else {
        $('.main-footer').width($(window).width() - 260);
      }  
    };  
    $(document).on('click', '[data-toggle="push-menu"]', function (e) {
      resizeFooter();
    });
    resizeFooter();     
    $('#header-thong-bao').slimScroll();
  });
}

/* @ngInject */
export default giaodienController;