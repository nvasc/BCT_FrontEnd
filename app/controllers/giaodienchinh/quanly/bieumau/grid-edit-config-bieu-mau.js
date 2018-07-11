import gridEditCommand from './grid-edit-command.html';
import _ from 'lodash';

export default function GridEditConfigBieuMau(scope, timeout, colConfigs) {
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
  }, {
    name: 'ColDataType',
    displayName: 'Kiểu dữ liệu',
    cellFilter: 'colDataTypeFilter',
    editableCellTemplate: 'ui-grid/dropdownEditor',
    editDropdownValueLabel: 'text',
    editDropdownOptionsArray: [{
      id: 0,
      text: 'None'
    },
    {
      id: 1,
      text: 'String'
    },
    {
      id: 2,
      text: 'Text'
    },
    {
      id: 3,
      text: 'Interger'
    },
    {
      id: 4,
      text: 'Double'
    },
    {
      id: 5,
      text: 'Date'
    },
    {
      id: 6,
      text: 'DateTime'
    }
    ]
  }, {
    name: 'DateFormat',
    displayName: 'Định dạng',
    enableCellEdit: true,
    enableSorting: false,
    enableFiltering: false,
  }, {
    name: 'IsNotUnicode',
    displayName: 'Không Unicode',
    enableCellEdit: true,
    enableSorting: false,
    enableFiltering: false,
    type: 'boolean'
  }, {
    name: 'IsRequired',
    displayName: 'Bắt Buộc',
    enableCellEdit: true,
    enableSorting: false,
    enableFiltering: false,
    type: 'boolean'
  }, {
    name: 'IsConditionColum',
    displayName: 'Khóa',
    enableCellEdit: true,
    enableSorting: false,
    enableFiltering: false,
    type: 'boolean'
  }, {
    name: 'MappingToName',
    displayName: 'Ánh Xạ',
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
      ColDataType: 0,
      DateFormat: '',
      IsNotUnicode: true,
      IsRequired: false,
      IsConditionColum: false,
      MappingToName: '',
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
    for (var i = 0; i < self.data.length; i++) {
      var obj = self.data[i];  
      if (obj.Id === row.entity.Id) {
        self.data.splice(i, 1);
        i--;
      }
    }
  };
}
