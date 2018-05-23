import logoHtml from './logo.html';
import controller from './logo.controller';

function logoDirective () {
  return {
    restrict: 'E',
    scope: {},
    template: logoHtml,    
    controller: controller,
    controllerAs: 'logo',
  };
}

export default logoDirective;