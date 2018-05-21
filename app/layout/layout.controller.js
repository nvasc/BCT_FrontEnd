import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';

function layoutController ($scope, layoutService) {
  const vm = this;
  vm.title = layoutService.title();
  console.log($scope);
  $('#abc').kendoButton();
  $('#calendar').kendoCalendar();
}

/* @ngInject */
export default layoutController;