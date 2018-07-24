//Operator: Or = 0, And = 1, Not = 2
//Condition: 
// Content = 0,
// StartWith = 1,
// EndWith = 2,
// Equals = 3,
// DoesNotEqual = 4,
// GreaterThan = 5,
// GreaterThanOrEqual = 6,
// LessThan = 7,
// LessThanOrEqual = 8,
//DataType: String = 0, Number = 1, Date = 2, Boolean = 3
export default function FilterGrid() {
  var self = this;

  self.getCondition = function(gridApi) {
    var filters = [];
    var filter = {
      Clauses: [],
      Op: 0
    };
    var clauses = [];
    var clause = {
      Operation: {},
      Op: 0
    };
    var operation = {
      Condition: 1,
      DataType: 0,
      Field: '',
      Value: ''
    };
    if (gridApi && gridApi.grid) {
      var grid = gridApi.grid;
      for (var i = 0; i < grid.columns.length; i++) {
        var col = grid.columns[i];
        var filter = col.filters[0];
        if (angular.isDefined(filter.term) && filter.term !== null && filter.term !== '') {
          operation = {
            Condition: getConditionByDataType(col.colDef.dataType),
            DataType: !col.colDef.dataType ? 0 : col.colDef.dataType,
            Field: col.field,
            Value: filter.term
          };
          clause.Operation = angular.copy(operation);
          clauses.push(clause)
        }
      }
      if (clauses.length > 0) {
        filter.Clauses = angular.copy(clauses);
        filters.push(filter)
      }
    }
    return filters.length === 0 ? null : filters;
  }

  function getConditionByDataType(datatype) {
    
    switch (datatype) {
      case 1:
      case 2:
      case 3:
        return 3;
    }
    return 0;
  }
}
