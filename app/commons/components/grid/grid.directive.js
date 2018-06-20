import controller from './grid.controller';
import './style.css';

function gridDirective ()  {
  return {
    restrict: 'E',
    scope: {
      url: '@',      
      colDefs: '=',
      ciFilter: '=',
      ciSetScope: '=',
      setGridObject: '=',
      setDataItem: '=',
      multiSelect: '@',
      selectionRow: '=',
    },
    template: function (element, attrs) {
      var multiSelect = attrs.multiSelect === 'true';
      return '<div id=' + attrs.ciId + ' ui-grid="grid.gridOptions"  class="grid" ' +
      'ui-grid-infinite-scroll ui-grid-resize-columns ui-grid-autoResize ' +      
      ' style="height: 200px;"></div>';
    },
    controller: controller,
    controllerAs: 'grid'
  }
}

export default gridDirective;