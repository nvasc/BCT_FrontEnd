import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';

function dangnhapController ($scope,dangnhapService) {
  const vm = this;
  vm.title = dangnhapService.title();
  $('#abc').kendoButton();
  $('#calendar').kendoCalendar();
}

/* @ngInject */
export default dangnhapController;