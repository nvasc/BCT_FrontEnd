import gridEditCommand from './grid-edit-command.html';

export default function GridEditIssuerClient(scope, timeout, colConfigs) {
  var self = this;

  self.data = colConfigs;
  self.gridEditColumns = [{
    name: 'Issuer',
    displayName: 'Kết nối từ',
    enableCellEdit: true,
    enableSorting: false,
    enableFiltering: false,
  }, {
    name: 'IssuerFrom',
    displayName: 'Kết nối đến',
    enableCellEdit: true,
    enableSorting: false,
    enableFiltering: false,
  }, {
    name: 'AllowedOrigin',
    displayName: 'Chỉ định Api',
    enableCellEdit: true,
    enableSorting: false,
    enableFiltering: false,   
  }, {
    name: ' ',
    displayName: ' ',
    cellClass: 'grid-command',
    enableCellEdit: false,
    enableSorting: false,
    enableFiltering: false,
    cellTemplate: gridEditCommand,
    width: 30,
  }];

  self.addColumn = function () {    
    self.data.push({
      Id: 0,
      Issuer: '',
      name: '',
      AllowedOrigin: '',
    });    
  };

  var scopeGrid = null;
  self.setScope = function (val) {    
    scopeGrid = val;
  };
  
  self.deleteColumn = function (row) {
    for (var i = 0; i < self.data.length; i++) {
      var obj = self.data[i];  
      if (obj.Id === row.entity.Id) {
        self.data.splice(i, 1);
        i--;
      }
    }
  };
}
