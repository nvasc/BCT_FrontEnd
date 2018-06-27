function selectLocalDirective($timeout) {
  return {
    restrict: 'AC',
    require: 'ngModel',
    link: function (scope, element, attrs) {
      $timeout(function () {
        element.select2();
        element.select2Initialized = true;
      });

      var refreshSelect = function () {
        if (!element.select2Initialized) {
          return;
        }
        $timeout(function () {
          element.trigger('change');
        });
      };

      if (attrs.ngDisabled) {
        scope.$watch(attrs.ngDisabled, refreshSelect);
      }
    }
  };
}
/* @ngInject */
export default selectLocalDirective;
