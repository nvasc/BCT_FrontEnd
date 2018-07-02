import google from 'google';
//line chart
function lineController($scope, $element, $attrs, $timeout, oauthDataFactory) {
  var vm = this;
  vm.url = oauthDataFactory.urlMain() + $scope.url;

  google.charts.load('current', {
    'packages': [ 'corechart' ]
  });
  
  function drawChart() {
    if (angular.isDefined($scope.data))
    {
      var jsonData = angular.toJson($scope.data);
      var data = new google.visualization.DataTable(jsonData);

      var options = {
        title: $scope.title,
        width: $scope.width,
        height: $scope.height
      };

      var $pieChart = $(`#${$attrs.ciId}`);
      var chart = new google.visualization.LineChart($pieChart[0]);
      chart.draw(data, options);
    }
  };

  $scope.$watch('data', function(nval, oval) {
    if (!angular.equals(nval,oval))
    {
      google.charts.setOnLoadCallback(drawChart);
    }
  });

  function init() {
    google.charts.setOnLoadCallback(drawChart);
  };

  init();
}
/* @ngInject */
export default lineController;
