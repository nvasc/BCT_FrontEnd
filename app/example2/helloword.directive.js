class HelloWorldDirective {
  constructor() {
    this.template = '<div>{{ctrl.name}}</div>';
    this.restrict = 'E';
    this.scope = {
      parentBind: '='
    };
        
    this.controller = HelloWorldController;
    this.controllerAs = 'ctrl';
    this.bindToController = true;
  }

  compile(tElement) {
    console.log('compile FUNCTION:', tElement);
    return this.link.bind(this);
  }
    
// Directive link function
  link(scope, ele, attrs) {
    console.log('LINK FUNCTION:', scope, ele, attrs);
  }  

  static HelloWorldInstace() {
    return new HelloWorldDirective();
  }
}
  
// Directive's controller
class HelloWorldController {
  constructor ($scope, $timeout) {
    this.name = 'david';
    this.$scope = $scope;
    $timeout(function () {
      $scope.ctrl.parentBind('set parent title');
      //this.$scope.$parent.example2.title = '123'
    }, 2000);
  }
}
HelloWorldController.$inject = [
  '$scope', 
  '$timeout',
  'example2Service' 
];
export default HelloWorldDirective.HelloWorldInstace
  