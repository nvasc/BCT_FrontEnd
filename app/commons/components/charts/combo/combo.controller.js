import google from 'google';

function comboController($scope, $attrs) {

  //example
  // <ci-combo ci-id="comboChart" data="chartData">
  // url: '@',
  // title: '=',
  // width: '=',
  // height: '=',
  // vAxisTitle: '=',
  // hAxisTitle: '=',
  // data: '='
  // </ci-combo>

  google.charts.load('current', {
    'packages': [ 'corechart' ]
  });
      
  function drawChart() {
  
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
    
  function init() {
    google.charts.setOnLoadCallback(drawChart);
  };
    
  init();
}
/* @ngInject */
export default comboController;
