import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';

function testController ($scope, testService) {
  const vm = this;
  vm.title = testService.title();
  $('#abc').kendoButton();
  $('#calendar').kendoCalendar();
}

/* @ngInject */
export default testController;