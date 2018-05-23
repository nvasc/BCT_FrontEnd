import headerHtml from './header.html';
import controller from './header.controller';

function headerDirective () {
  return {
    restrict: 'E',
    scope: {},
    template: headerHtml,    
    controller: controller,
    controllerAs: 'header',
  };
}

export default headerDirective;