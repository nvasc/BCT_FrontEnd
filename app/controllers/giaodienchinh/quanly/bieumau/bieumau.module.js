import angular from 'angular';
import routing from './bieumau.route';
import component from './bieumau.component';
import service from './bieumau.service';
import colDataTypeFilter from './col-data-type-filter.js';

/* @ngInject */
angular
  .module('bieumau', [])
  .component('bieumau', component)  
  .factory('bieumauService', service)
  .filter('colDataTypeFilter', colDataTypeFilter)
  .config(routing);
  