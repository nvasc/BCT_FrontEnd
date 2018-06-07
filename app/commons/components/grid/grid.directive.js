import controller from './grid.controller';

function gridDirective () {
  return {
    restrict: 'E',
    scope: {
      colList: '=',
      gSort: '@',
      gFilter: '='
    },
    template: function (ele, attrs) {
      return '<div id="' + attrs.ciId + '"></div>';
    },    
    controller: controller,
    controllerAs: 'grid',
  };
}

export default gridDirective;