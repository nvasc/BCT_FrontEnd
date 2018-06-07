function apiController ($scope, apiService) {
  const vm = this;
  apiService.init();
  vm.colList = [
    {
      field: 'Id',
      width: 75,
      title: '#',      
      filterable: {
        cell: {          
          showOperators: false, 
          template: function(args) {
            args.element.kendoNumericTextBox({
              format: '0'
            });
          }
        }
      }
    }
  ]
}

/* @ngInject */
export default apiController;