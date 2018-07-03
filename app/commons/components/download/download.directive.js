
import controller from './download.controller';
function downloadDirective ()  {
  return {
    restrict: 'E',
    scope: {
      ciGid: '@',     
    },
    transclude: true,
    template: function (element, attrs) {     
      return '<a href="javascript:void(0);" ng-click="downloadFile();">' + 
      '<ng-transclude></ng-transclude></a>';
    },
    controller: controller,
    controllerAs: 'download',
  }
}

export default downloadDirective;