import controller from './column.controller';

function columnDirective () {
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
    controllerAs: 'column',
    controller: controller
  }
}

export default columnDirective;