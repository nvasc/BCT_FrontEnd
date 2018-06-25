//import google from 'google'

function baocaolanhdaoController ($scope, baocaolanhdaoService, $timeout, $document) {
  const vm = this;
  baocaolanhdaoService.init();

  $scope.chartTitle = 'navan';
  $scope.chartWidth = 500;
  $scope.chartHeight = 320;
  $scope.chartData = [
        ['Ad Flyers', 11],
        ['Web (Organic)', 4],
        ['Web (PPC)', 4],
        ['Yellow Pages', 7],
        ['Showroom', 3]
  ];

  $scope.charDataT = [
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ];

  $scope.chartDataC = [
        ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
        ['2004/05',  165,      938,         522,             998,           450,      614.6],
        ['2005/06',  135,      1120,        599,             1268,          288,      682],
        ['2006/07',  157,      1167,        587,             807,           397,      623],
        ['2007/08',  139,      1110,        615,             968,           215,      609.4],
        ['2008/09',  136,      691,         629,             1026,          366,      569.6]
  ];

  // google.charts.load('current', {'packages':[ 'corechart' ]});

  // // Set a callback to run when the Google Visualization API is loaded.
  // google.charts.setOnLoadCallback(drawChart);

  // // Callback that creates and populates a data table,
  // // instantiates the pie chart, passes in the data and
  // // draws it.
  // function drawChart() {

  //   // Create the data table.
  //   var data = new google.visualization.DataTable();
  //   data.addColumn('string', 'Topping');
  //   data.addColumn('number', 'Slices');
  //   data.addRows([
  //     ['Mushrooms', 3],
  //     ['Onions', 1],
  //     ['Olives', 1],
  //     ['Zucchini', 1],
  //     ['Pepperoni', 2]
  //   ]);

  //   // Set chart options
  //   var options = {
  //     'title':'How Much Pizza I Ate Last Night',
  //     'width':400,
  //     'height':300
  //   };

  //   // Instantiate and draw our chart, passing in some options.
  //   var chart = new google.visualization.PieChart($('#chart_div')[0]);
  //   chart.draw(data, options);
  // }
}

/* @ngInject */
export default baocaolanhdaoController;