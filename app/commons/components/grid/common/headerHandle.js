import headerFilter from './header-filter.html';
import headerFilterExpand from './header-filter-expand.html';

export default function headerHandle(colDefs, scope) {
  for (var i = 0; i < colDefs.length; i++) {
    if (colDefs[i].enableFiltering !== false &&
              angular.isUndefined(colDefs[i].filterHeaderTemplate)) {
      if (scope.gridExpand) {
        colDefs[i].filterHeaderTemplate = headerFilterExpand;
      } else {
        colDefs[i].filterHeaderTemplate = headerFilter;
      }
    }
  }
  return colDefs;
}