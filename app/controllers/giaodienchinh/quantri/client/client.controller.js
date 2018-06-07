import gridCommand from './grid-command.html';

function clientController ($scope, clientService) {
  const vm = this;
  clientService.init();

  vm.colList = [
    {
      field: 'Id', width: 65, title: '#', filterable: false, sortable: true    
    }, {
      field: 'Audience', width: 150, title: 'Audience', filterable: { 
        cell: { 
          showOperators: false
        }
      }, sortable: true    
    },{
      field: 'Secret', width: 150, title: 'Secret', filterable: { 
        cell: { 
          showOperators: false,         
        }
      }, sortable: true  
    }, {
      field: 'Issuer', title: 'Issuer', filterable: { 
        cell: { 
          showOperators: false          
        }
      }, sortable: false           
    }, {
      field: 'IssuerFrom', width: 150, title: 'Issuer From', filterable: { 
        cell: { 
          showOperators: false          
        }
      }, sortable: true      
    }, {
      width: 90,
      template: gridCommand
    }
  ];

  vm.isFilter = false;  
  vm.filter = function () {
    vm.isFilter = !vm.isFilter;
  }

  vm.update = function () {
    console.log('update')
  };

  vm.delete = function () {
    console.log('delete')
  };
}

/* @ngInject */
export default clientController;