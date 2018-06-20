

/* @ngInject */
export default class example2Controller {
  constructor($scope,$ngConfirm, example2Service) {
    this.title = example2Service.title();   

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

