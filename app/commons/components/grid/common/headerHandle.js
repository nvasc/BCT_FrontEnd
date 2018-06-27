import headerFilter from './header-filter.html';

export default function headerHandle(colDefs) {
  for (var i = 0; i < colDefs.length; i++) {
    if (colDefs[i].enableFiltering !== false &&
              angular.isUndefined(colDefs[i].filterHeaderTemplate)) {
      colDefs[i].filterHeaderTemplate = headerFilter;
    }
  }
  return colDefs;
}