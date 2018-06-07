import '@progress/kendo-ui/js/kendo.grid';
import '@progress/kendo-ui/js/kendo.filtercell';
import toolbarDefault from './toolbar-default.html'
import editCommand from './edit.html'
import deleteCommand from './delete.html'
import detailCommand from './detail.html'

function gridController ($scope, $element, $attrs, $timeout) {
  const vm = this;
  vm.ciId = $attrs.ciId;
  var $grid = $('#' + $attrs.ciId);
  
  
  var grid = $grid.kendoGrid({ 
    sortable: $scope.gSort === 'true' ? {
      mode: 'single',
      allowUnsort: true
    } : false,   
    columns: $scope.colList,
    dataSource: {
      data: [
        {Id: 1},
        {Id: 2},
      ],
      schema: {
        model: {
          fields: {
            Id: { type: 'string' },             
          }
        }
      }
    }    
  });

  var gridControl = $grid.data('kendoGrid');
  $scope.$watch('gFilter', function (nval, oval) {
    if (nval !== oval) {
      if (nval) {
        gridControl.setOptions({
          filterable: {
            mode: 'row'
          }
        });
      }
      else { 
        gridControl.setOptions({
          filterable: false
        });
      }
    }
  });

  function update(e) { 
    console.log(e);
  }

  
  function resize() {
    $timeout(function () { 
      var height = $.AdminLTE.layout.getFixOfContentHeight() - 22;
      gridControl.setOptions({ height: height });
    });
  }
  function init() {
    resize();
    $(window, '.wrapper').resize(function () {
      resize();    
    });   
  }
  
  init();
}

/* @ngInject */
export default gridController;