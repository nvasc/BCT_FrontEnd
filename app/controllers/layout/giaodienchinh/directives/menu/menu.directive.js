import menuHtml from './menu.html';
import controller from './menu.controller';

function menuDirective () {
  return {
    restrict: 'E',
    scope: {},
    template: menuHtml,    
    controller: controller,
    controllerAs: 'menu',
  };
}

export default menuDirective;