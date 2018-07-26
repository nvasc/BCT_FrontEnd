import controller from './select.controller';
import _ from 'lodash';
function selectDirective ()  {
  return {
    restrict: 'E',
    scope: {
      ciId: '@',
      url: '@',
      ciOneLoad: '@',
      ciIsMultiple: '@',
      ciFilterDefault: '@', 
      ciFilterDefaultObj: '=',
      ciSetScope: '=',
      ngModel: '=',
      ciValueType: '@',
      ciDefaulText: '@',
      ciQueryIdName: '@'
    },
    require: '^ngModel',
    template: function (element, attrs) {
      var isMultiple = '';
      if (attrs.ciIsMultiple === 'true') {
        isMultiple = 'multiple'
      }
      return '<select id="' + attrs.ciId + '" ' + 
              isMultiple + ' style="width:100%;">' + 
              '<option value="0"> ' + 
              (attrs.ciDefaulText ? attrs.ciDefaulText : '--- Chọn ---') + 
              '</option>' +
              '</select>';
    },
    controller: controller,
    controllerAs: 'select'
  }
}
export default selectDirective;