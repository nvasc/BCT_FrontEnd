
import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';

/* @ngInject */
export default class example2Controller {
  constructor($scope,$ngConfirm, example2Service) {
    this.title = example2Service.title();
    
    $('#abc').kendoButton();
    $('#calendar').kendoCalendar();  
    this.$scope = $scope;
    this.example2Service = example2Service; 
    this.$ngConfirm = $ngConfirm;
  }

  sayHello() {
    console.log(this);
    this.$ngConfirm('You clicked on something.', this.$scope)
  }
  
  setTitle(title) {    
    console.log(this);
  }
};

/*
import '@progress/kendo-ui/js/kendo.button';
import '@progress/kendo-ui/js/kendo.calendar';
*/
/*
function exampleController ($scope, exampleService) {
  const vm = this;
  vm.title = exampleService.title();
  $('#abc').kendoButton();
  $('#calendar').kendoCalendar();

  vm.setTitle = (title) => {
    console.log(vm)
    vm.title = title;
  }
}
*/
/* @ngInject */
//export default exampleController;

