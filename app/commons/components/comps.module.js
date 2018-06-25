import angular from 'angular';
import 'angular-ui-grid/ui-grid.css';

import 'angular-ui-grid/ui-grid';
//import 'angular-ui-grid/ui-grid.auto-resize';

import grid from './grid/grid.directive';
import popupFactory from './popup/popupFactory';

//import controller from './example.controller';

import pie from './charts/pie/pie.directive';
import combo from './charts/combo/combo.directive';
import bar from './charts/bar/bar.directive';
import column from './charts/column/column.directive';
import line from './charts/line/line.directive';

/* @ngInject */
angular
  .module('comps', [
    'ui.grid', 'ui.grid.infiniteScroll', 'ui.grid.resizeColumns', 'ui.grid.autoResize'
  ])
  .directive('ciGrid', grid)
  .directive('ciPie', pie)
  .directive('ciCombo', combo)
  .directive('ciBar', bar)
  .directive('ciColumn', column)
  .directive('ciLine', line)
  .factory('popupFactory', popupFactory)
  