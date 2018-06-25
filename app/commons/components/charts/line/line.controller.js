import google from 'google';

function pieController($scope, $element, $attrs, $timeout, oauthDataFactory) {
  var vm = this;
  vm.url = oauthDataFactory.urlMain() + $scope.url;

  google.charts.load('current', {
    'packages': [ 'corechart' ]
  });
  
  function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Label');
    data.addColumn('number', 'Value');
    
    
    var label, value;
    data.removeRows(0, data.getNumberOfRows());
    angular.forEach($scope.data, function (row) {
      label = row[0];
      value = parseFloat(row[1], 10);
      if (!isNaN(value)) {
        data.addRow([row[0], value]);
      }
    });

    var options = {
      title: $scope.title,
      width: $scope.width,
      height: $scope.height
    };

    var $pieChart = $(`#${$attrs.ciId}`);
    var chart = new google.visualization.LineChart($pieChart[0]);
    chart.draw(data, options);
  }

  function init() {
    google.charts.setOnLoadCallback(drawChart);
  };

  init();
}
/* @ngInject */
export default pieController;
