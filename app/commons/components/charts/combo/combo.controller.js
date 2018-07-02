import google from 'google';

function comboController($scope, $attrs) {

  google.charts.load('current', {
    'packages': [ 'corechart' ]
  });
      
  function drawChart() {
    if (angular.isDefined($scope.data))
    {
      var jsonData = angular.toJson($scope.data);
      var data = new google.visualization.DataTable(jsonData);
      var options = {
        title : $scope.title,
        vAxis: {title: $scope.vAxisTitle},
        hAxis: {title: $scope.hAxisTitle},
        seriesType: 'bars',
        series: {
          5: { type: 'line' }
        },
        width: $scope.width,
        height: $scope.height,
      };

      var $comboChart = $(`#${$attrs.ciId}`);
      var chart = new google.visualization.ComboChart($comboChart[0]);
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
export default comboController;
