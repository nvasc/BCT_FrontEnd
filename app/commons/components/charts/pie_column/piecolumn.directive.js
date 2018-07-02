import controller from './piecolumn.controller';

function piecolumnDirective () {
  return {
    restrict: 'E',
    scope: {
      url: '@',
      title: '=',
      width: '=',
      height: '=',
      data: '=',
      type: '='
    },
    template: function (element, attrs) {
      return `<div id='${attrs.ciId}'></div>`;
    },
    controllerAs: 'line',
    controller: controller
  }
}
/* @ngInject */
export default piecolumnDirective;