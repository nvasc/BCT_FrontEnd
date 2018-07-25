import gridEditCommand from './grid-edit-command-tham-so.html';
import _ from 'lodash';

export default function GridEditConfigBieuMauThamSo(scope, timeout, colConfigs) {
  var self = this;

  self.data = colConfigs;
  self.gridEditColumns = [{
    name: 'Index',
    displayName: '#',
    enableCellEdit: false,
    enableSorting: false,
    enableFiltering: false,
    width: 30,
  }, {
    name: 'Name',
    displayName: 'Tên',
    enableCellEdit: true,
    enableSorting: false,
    enableFiltering: false,
  },{
    name: 'TableName',
    displayName: 'Bảng giá trị',
    enableCellEdit: true,
    enableSorting: false,
    enableFiltering: false,
  },{
    name: 'Column',
    displayName: 'Cột của bảng giá trị',
    enableCellEdit: true,
    enableSorting: false,
    enableFiltering: false,
  }, {
    name: 'MappingToCell',
    displayName: 'Ô giá trị trên Excel',
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
    width: 90,
  }];

  self.addColumn = function () {
    var obj = _.findLast(self.data, function(n) {
      return n.IsLast;
    });
    var index = 1;

    if (obj) {
      index = obj.Index + 1;
      obj.IsLast = false;
    }
    self.data.push({
      Index: index,
      Name: '',
      TableName: '',
      Column: '',
      MappingToCell: '',
      IsLast: true,
    });    
  };
  var _swapObject = function(o1, o2, propIgnores) {
    var s = angular.copy(o2);
    for (var i in o1) {
      if (!_.includes(propIgnores, i)) {
        o2[i] = o1[i];
        o1[i] = s[i];
      }
    }

  };
  self.upColumn = function (row) {    
    var currentObj = _.find(self.data, function (item) { 
      return row.entity.Index === item.Index;
    });
    var upObj = _.find(self.data, function (item) { 
      return row.entity.Index - 1 === item.Index;
    });    
    _swapObject(currentObj, upObj, ['Index', 'IsLast']);
  };

  self.downColumn = function (row) {
    var currentObj = _.find(self.data, function (item) { 
      return row.entity.Index === item.Index;
    });
    var upObj = _.find(self.data, function (item) { 
      return row.entity.Index + 1 === item.Index;
    });    
    _swapObject(currentObj, upObj, ['Index', 'IsLast']);
  };
  
  var scopeGrid = null;
  self.setScope = function (val) {    
    scopeGrid = val;
  };
  
  self.deleteColumn = function (row) {
    var dataLength = self.data.length;
    for (var i = 0; i < self.data.length; i++) {
      var obj = self.data[i];  
      if (obj['$$hashKey'] === row.entity['$$hashKey']) {
        self.data.splice(i, 1);        
        i--; 
        if (self.data.length === i + 1) {
          self.data[i].IsLast = true; 
        }            
      }      
      obj.IsLast = self.data.length === i + 1; 
      obj.Index = (i + 1);           
    }
  };
}
