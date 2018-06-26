import controller from './line.controller';

function lineDirective () {
  return {
    restrict: 'E',
    scope: {
      url: '@',
      title: '=',
      width: '=',
      height: '=',
      data: '='
    },
    template: function (element, attrs) {
      return `<div id='${attrs.ciId}'></div>`;
    },
    controllerAs: 'line',
    controller: controller
  }
}
/* @ngInject */
export default lineDirective;