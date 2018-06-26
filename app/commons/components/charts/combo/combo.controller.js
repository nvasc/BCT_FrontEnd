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

    var data = new google.visualization.DataTable();
    if (angular.isDefined($scope.data) && $scope.data.length > 0) {   
      var rowData = $scope.data[0];
      angular.forEach(rowData, function (item, $index) {
        if ($index === 0) {
          data.addColumn('string', item);
        }
        else {
          data.addColumn('number', item);
        }
      });
      data.removeRows(0, data.getNumberOfRows());
      angular.forEach($scope.data, function (row, $index) {
        if ($index > 0) {
          data.addRow(row);
        }
      });
    }
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
