import controller from './pie.controller';

function pieDirective () {
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
    controllerAs: 'pie',
    controller: controller
  }
}

export default pieDirective;