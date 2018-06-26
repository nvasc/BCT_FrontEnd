import angular from 'angular';
import 'angular-ui-grid/ui-grid.css';
import './style.css';

import 'angular-ui-grid/ui-grid';
//import 'angular-ui-grid/ui-grid.auto-resize';

import grid from './grid/grid/grid.directive';
import gridExpand from './grid/gridExpand/gridExpand.directive';
import popupFactory from './popup/popupFactory';

//import controller from './example.controller';

/* @ngInject */
angular
  .module('comps', [
    'ui.grid', 'ui.grid.infiniteScroll', 'ui.grid.resizeColumns', 'ui.grid.autoResize',
    'ui.grid.expandable', 'ui.grid.selection', 'ui.grid.pinning'
  ])
  .directive('ciGrid', grid)
  .directive('ciGridExpand', gridExpand)
  .factory('popupFactory', popupFactory)
  