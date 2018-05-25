import angular from 'angular';
import routing from './hoptacquocte.route';
import component from './hoptacquocte.component';
import service from './hoptacquocte.service';

/* @ngInject */
angular
  .module('hoptacquocte', [])
  .component('hoptacquocte', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('hoptacquocteService', service)
  .config(routing);
  