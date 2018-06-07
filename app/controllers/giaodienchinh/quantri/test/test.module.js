import angular from 'angular';
import routing from './test.route';
import component from './test.component';
import service from './test.service';
//import controller from './test.controller';

/* @ngInject */
angular
  .module('test', [])
  .component('test', component)  
  //.controller('testController', controller)
  .factory('testService', service)
  .config(routing);
  