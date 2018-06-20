import angular from 'angular';
import 'angular-ui-grid/ui-grid.css';

import 'angular-ui-grid/ui-grid';
//import 'angular-ui-grid/ui-grid.auto-resize';

import grid from './grid/grid.directive';
import popupFactory from './popup/popupFactory';

//import controller from './example.controller';

/* @ngInject */
angular
  .module('comps', [
    'ui.grid', 'ui.grid.infiniteScroll', 'ui.grid.resizeColumns', 'ui.grid.autoResize'
  ])
  .directive('ciGrid', grid)
  .factory('popupFactory', popupFactory)
  