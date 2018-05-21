import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';

function forgotpasswordController ($scope,forgotpasswordService) {
  const vm = this;
  vm.title = forgotpasswordService.title();
  console.log($scope);
  $('#abc').kendoButton();
  $('#calendar').kendoCalendar();
}

/* @ngInject */
export default forgotpasswordController;