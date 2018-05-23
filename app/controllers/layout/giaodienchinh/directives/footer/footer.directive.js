import footerHtml from './footer.html';
import controller from './footer.controller';

function footerDirective () {
  return {
    restrict: 'E',
    scope: {},
    template: footerHtml,    
    controller: controller,
    controllerAs: 'footer',
  };
}

export default footerDirective;