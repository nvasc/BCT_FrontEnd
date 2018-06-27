function OrderByGrid (uiGridConstants) {
  var self = this;
  self.orderByObj = null;

  self.getOrderBy = function() {
    if (self.orderByObj) {
      return [ self.orderByObj ];
    }
    return [];
  }
  self.sortChanged = function (grid, sortColumns) {
    self.orderByObj = null;
    if (sortColumns.length !== 0) {
      switch (sortColumns[0].sort.direction) {
        case uiGridConstants.ASC:
          self.orderByObj = {
            IsDescending: false,
            Field: sortColumns[0].name
          };
          break;
        case uiGridConstants.DESC:
          self.orderByObj = {
            IsDescending: true,
            Field: sortColumns[0].name
          };
          break;
      }
    }    
  }
}

export default OrderByGrid;