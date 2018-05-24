import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';

function quenmatkhauController ($scope,quenmatkhauService) {
  const vm = this;
  vm.title = quenmatkhauService.title();
  $('#abc').kendoButton();
  $('#calendar').kendoCalendar();
}

/* @ngInject */
export default quenmatkhauController;