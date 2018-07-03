
import controller from './upload.controller';
function uploadDirective ()  {
  return {
    restrict: 'E',
    scope: {
      ciId: '@',
      url: '@',  
      ciFileName: '=',
      ciStoreFileName: '='    
    },
    transclude: true,
    template: function (element, attrs) {     
      return '<button type="button"><ng-transclude></ng-transclude>' +
      '<input id="' + attrs.ciId + '" type="file" style="display:none"></button>' +
      '<ul class="list-group list-group-files"></ul>';
    },
    controller: controller,
    controllerAs: 'upload'
  }
}

export default uploadDirective;