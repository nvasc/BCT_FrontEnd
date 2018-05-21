import angular from 'angular';
import routing from './layout.route';
import component from './layout.component';
import service from './layout.service';

/* @ngInject */
angular
  .module('layout', [])
  .component('layout', component)  
  //.controller('layoutController', controller)
  .factory('layoutService', service)
  .config(routing);
  