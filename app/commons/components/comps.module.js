import angular from 'angular';
import 'angular-ui-grid/ui-grid.css';
import 'select2/dist/css/select2.css';
import './style.css';

import 'angular-ui-grid/ui-grid';
//import 'angular-ui-grid/ui-grid.auto-resize';

import grid from './grid/grid/grid.directive';
import gridExpand from './grid/gridExpand/gridExpand.directive';
import select from './select/select.directive';
import selectLocal from './select/selectLocal.directive';
import popupFactory from './popup/popupFactory';

//import controller from './example.controller';

import pie from './charts/pie/pie.directive';
import combo from './charts/combo/combo.directive';
import bar from './charts/bar/bar.directive';
import column from './charts/column/column.directive';
import line from './charts/line/line.directive';
import piecolumn from './charts/pie_column/piecolumn.directive';

import table from './table/table.directive';

/* @ngInject */
angular
  .module('comps', [
    'ui.grid', 'ui.grid.infiniteScroll', 'ui.grid.resizeColumns', 'ui.grid.autoResize',
    'ngSanitize',
    'ui.grid.expandable', 'ui.grid.selection', 'ui.grid.pinning'
  ])
  .directive('ciGrid', grid)
  .directive('ciGridExpand', gridExpand)
  .directive('ciSelect', select)
  .directive('ciSelectLocal', selectLocal)
  .directive('ciPie', pie)
  .directive('ciCombo', combo)
  .directive('ciBar', bar)
  .directive('ciColumn', column)
  .directive('ciLine', line)
  .directive('ciTable',table)
  .directive('ciPieColumn',piecolumn)
  .factory('popupFactory', popupFactory)
  