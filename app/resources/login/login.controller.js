import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';

function loginController ($scope,loginService) {
  const vm = this;
  vm.title = loginService.title();
  console.log($scope);
  $('#abc').kendoButton();
  $('#calendar').kendoCalendar();
}

/* @ngInject */
export default loginController;