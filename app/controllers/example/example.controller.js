import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';

function exampleController ($scope, exampleService) {
  const vm = this;
  vm.title = exampleService.title();
  console.log($scope);
  $('#abc').kendoButton();
  $('#calendar').kendoCalendar();
}

/* @ngInject */
export default exampleController;