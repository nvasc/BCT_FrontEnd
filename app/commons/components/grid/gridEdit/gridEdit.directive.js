import controller from './gridEdit.controller';
import _ from 'lodash';
function gridEditDirective ()  {
  return {
    restrict: 'E',
    scope: {
      ciId: '@',
      url: '@',            
      colDefs: '=',    
      ciData: '=',  
      ciSetScope: '=',
    },
    template: function (element, attrs) {
      var multiSelect = attrs.multiSelect === 'true';
      var htmlStyle = '';

      if (attrs.ciHeight && attrs.ciHeight !== '') {
        htmlStyle += 'height: ' + attrs.ciHeight + 'px;'
      }
      var ciId = _.isUndefined(attrs.ciId) ? (Math.random() * 1e32).toString(36) : attrs.ciId;
      return '<div id=' + ciId + ' ui-grid="gridEdit.gridOptions"  class="grid" ' +
      'ui-grid-edit ui-grid-cellnav ui-grid-resize-columns ui-grid-autoResize ' +      
      'style="' + htmlStyle + '"></div>';
    },
    controller: controller,
    controllerAs: 'gridEdit'
  }
}

export default gridEditDirective;