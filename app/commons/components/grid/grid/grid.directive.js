import controller from './grid.controller';
import _ from 'lodash';
function gridDirective ()  {
  return {
    restrict: 'E',
    scope: {
      ciId: '@',
      url: '@',      
      colDefs: '=',
      ciGridCommand: '=',
      ciSortDefault: '=',
      ciHeight: '@',
      ciFilter: '=',
      ciFilterDefault: '=',
      ciQueryId: '@',
      ciSetScope: '=',
    },
    template: function (element, attrs) {
      var multiSelect = attrs.multiSelect === 'true';
      var htmlStyle = '';

      if (attrs.ciHeight && attrs.ciHeight !== '') {
        htmlStyle += 'height: ' + attrs.ciHeight + 'px;'
      }
      var ciId = _.isUndefined(attrs.ciId) ? (Math.random() * 1e32).toString(36) : attrs.ciId;
      return '<div id=' + ciId + ' ui-grid="grid.gridOptions"  class="grid" ' +
      'ui-grid-infinite-scroll ui-grid-resize-columns ui-grid-autoResize ' +      
      'style="' + htmlStyle + '"></div>';
    },
    controller: controller,
    controllerAs: 'grid'
  }
}

export default gridDirective;