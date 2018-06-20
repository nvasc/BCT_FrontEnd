import angular from 'angular';
import routing from './page401.route';
import component from './page401.component';
import service from './page401.service';
//import controller from './page401.controller';

/* @ngInject */
angular
  .module('page401', [])
  .component('page401', component)  
  //.controller('page401Controller', controller)
  .factory('page401Service', service)
  .config(routing);
  