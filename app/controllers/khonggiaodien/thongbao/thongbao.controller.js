import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';

function thongbaoController ($scope,thongbaoService) {
  const vm = this;
  vm.title = thongbaoService.title();
  $('#abc').kendoButton();
  $('#calendar').kendoCalendar();
}

/* @ngInject */
export default thongbaoController;