import google from 'google';

function comboController($scope, $attrs) {
  google.charts.load('current', {
    'packages': [ 'corechart' ]
  });
      
  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Month');
    data.addColumn('number', 'Bolivia');
    data.addColumn('number', 'Ecuador');
    data.addColumn('number', 'Madagascar');
    data.addColumn('number', 'Papua New Guinea');
    data.addColumn('number', 'Rwanda');
    data.addColumn('number', 'Average');

    console.log(data)

    // var data = google.visualization.arrayToDataTable([
    //     ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
    //     ['2004/05',  165,      938,         522,             998,           450,      614.6],
    //     ['2005/06',  135,      1120,        599,             1268,          288,      682],
    //     ['2006/07',  157,      1167,        587,             807,           397,      623],
    //     ['2007/08',  139,      1110,        615,             968,           215,      609.4],
    //     ['2008/09',  136,      691,         629,             1026,          366,      569.6]
    // ]);
    var Month, Bolivia, Ecuador, Madagascar, PapuaNewGuinea, Rwanda, Average;
    data.removeRows(0, data.getNumberOfRows());
    angular.forEach($scope.data, function (row) {
      Month = row[0];
      Bolivia = parseFloat(row[1], 10);
      Ecuador = parseFloat(row[2], 10);
      Madagascar = parseFloat(row[3], 10);
      PapuaNewGuinea = parseFloat(row[4], 10);
      Rwanda = parseFloat(row[5], 10);
      Average = parseFloat(row[6], 10);
      if (!isNaN(Bolivia) && !isNaN(Ecuador) && !isNaN(Madagascar) && 
      !isNaN(PapuaNewGuinea) && !isNaN(Rwanda) && !isNaN(Average))  {
        data.addRow([Month, Bolivia, Ecuador, Madagascar, PapuaNewGuinea, Rwanda, Average]);
      }
    });

    // var options = {
    //   title: $scope.title,
    //   width: $scope.width,
    //   height: $scope.height
    // };

    var options = {
      title : 'Monthly Coffee Production by Country',
      vAxis: {title: ''},
      hAxis: {title: 'Month'},
      seriesType: 'bars',
      series: {5: {type: 'line'}}
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
