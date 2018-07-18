import angular from 'angular';
import routing from './dantoc.route';
import component from './dantoc.component';
import service from './dantoc.service';

/* @ngInject */
angular
  .module('dantoc', [])
  .component('dantoc', component)  
  .factory('dantocService', service)
  .config(routing);
  