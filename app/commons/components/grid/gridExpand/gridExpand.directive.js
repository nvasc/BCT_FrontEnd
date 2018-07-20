import controller from './gridExpand.controller';
import _ from 'lodash';
function gridExpandDirective ()  {
  return {
    restrict: 'E',
    scope: {
      ciId: '@',
      url: '@',      
      colDefs: '=',
      ciGridCommand: '=',
      ciFilter: '=',
      ciFilterDefault: '=',
      ciSortDefault: '=',
      ciQueryId: '@',
      ciSetScope: '=',
      ciIsInner: '@',
      ciExpandObject: '=',
      ciRole: '='
    },
    template: function (element, attrs) {

      var multiSelect = attrs.multiSelect === 'true';
      var htmlStyle = '';

      if (attrs.ciHeight && attrs.ciHeight !== '') {
        htmlStyle += 'height: ' + attrs.ciHeight + 'px;'
      }
      var ciId = _.isUndefined(attrs.ciId) ? (Math.random() * 1e32).toString(36) : attrs.ciId;

      return '<div id=' + ciId + ' ui-grid="gridExpand.gridOptions" class="grid" ' +
      'ui-grid-pinning ui-grid-expandable ui-grid-infinite-scroll ' +
      'ui-grid-resize-columns ui-grid-autoResize ' +      
      'style="' + htmlStyle + '"></div>';
    },
    controller: controller,
    controllerAs: 'gridExpand'
  }
}

export default gridExpandDirective;