import google from 'google';

function columnController($scope, $element, $attrs, $timeout, oauthDataFactory) {
  var vm = this;
  vm.url = oauthDataFactory.urlMain() + $scope.url;

  google.charts.load('current', {
    'packages': [ 'corechart' ]
  });
  
  function drawChart() {

    var jsonData = angular.toJson($scope.data);
    var data = new google.visualization.DataTable(jsonData);
    var options = {
      title: $scope.title,
      width: $scope.width,
      height: $scope.height
    };

    var $pieChart = $(`#${$attrs.ciId}`);
    var chart = new google.visualization.ColumnChart($pieChart[0]);
    chart.draw(data, options);
  }

  function init() {
    google.charts.setOnLoadCallback(drawChart);
  };

  init();
}
/* @ngInject */
export default columnController;
