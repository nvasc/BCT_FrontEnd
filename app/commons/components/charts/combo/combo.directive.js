import controller from './combo.controller';

function comboDirective() {
  return {
    restrict: 'E',
    scope: {
      url: '@',
      title: '=',
      width: '=',
      height: '=',
      vAxisTitle: '=',
      hAxisTitle: '=',
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
