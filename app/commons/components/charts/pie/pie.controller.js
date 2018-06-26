import google from 'google';

function pieController($scope, $element, $attrs, $timeout, oauthDataFactory) {
  var vm = this;
  vm.url = oauthDataFactory.urlMain() + $scope.url;

  //init google chart
  google.charts.load('current', {
    'packages': [ 'corechart' ]
  });
  
  //Create chart
  function drawChart() {

    // Create the data table.
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
    // Set chart options
    var options = {
      title: $scope.title,
      width: $scope.width,
      height: $scope.height,
      //is3D: true,
    };
    // Instantiate and draw our chart, passing in some options.
    var $pieChart = $(`#${$attrs.ciId}`);
    var chart = new google.visualization.PieChart($pieChart[0]);
    chart.draw(data, options);
    google.visualization.events.addListener(chart, 'select', selectHandler);

  }

  function selectHandler(e) {
    console.log(e)
  }

  function init() {
    //call chart
    google.charts.setOnLoadCallback(drawChart);
  };

  init();
}
/* @ngInject */
export default pieController;
