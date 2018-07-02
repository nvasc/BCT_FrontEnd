import google from 'google';
//line chart
function piecolumnController($scope, $element, $attrs, $timeout, oauthDataFactory) {
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
      var chart;
      if ($scope.type === 'pie') {
        chart = new google.visualization.PieChart($pieChart[0]);
      } 
      else if ($scope.type === 'column') {
        chart = new google.visualization.ColumnChart($pieChart[0]);
      }
      chart.draw(data, options);

      google.visualization.events.addListener(chart, 'select', selectHandler);

      function selectHandler () {
        //var selectedItem = chart.getSelection()[0];
        console.log(data.getValue(chart.getSelection()[0].row, 2));
        //console.log(chart.getSelection());
      }
    }
  };


  $scope.$watch('data', function(nval, oval) {
    if (!angular.equals(nval,oval))
    {
      google.charts.setOnLoadCallback(drawChart);
    }
  });
  $scope.$watch('type', function(nval, oval) {
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
export default piecolumnController;
