import controller from './combo.controller';

function comboDirective() {
  return {
    restrict: 'E',
    scope: {
      url: '@',
      title: '=',
      width: '=',
      height: '=',
      data: '='
    },
    template: function (element,attrs) {
      return `<div id='${attrs.ciId}'></div>`;
    },
    controllerAs: 'combo',
    controller: controller
  }
}
export default comboDirective;
