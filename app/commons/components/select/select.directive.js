import controller from './select.controller';
import _ from 'lodash';
function selectDirective ()  {
  return {
    restrict: 'E',
    scope: {
      ciId: '@',
      url: '@',
      ciIsMultiple: '@',
      ciFilterDefault: '=', 
      ciSetScope: '=',
    },
    template: function (element, attrs) {
      var isMultiple = '';
      if (attrs.ciIsMultiple === 'true') {
        isMultiple = 'multiple'
      }
      return '<select id="' + attrs.ciId + '" ' + isMultiple + ' style="width:100%;"></select>';
    },
    controller: controller,
    controllerAs: 'select'
  }
}
export default selectDirective;