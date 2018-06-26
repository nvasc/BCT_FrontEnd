import controller from './bar.controller';

function barDirective () {
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
    controllerAs: 'bar',
    controller: controller
  }
}

export default barDirective;