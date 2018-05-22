import angular from 'angular';
import routing from './example.route';
import component from './example.component';
import service from './example.service';
//import controller from './example.controller';

/* @ngInject */
angular
  .module('example', [])
  .component('example', component)  
  //.controller('exampleController', controller)
  .factory('exampleService', service)
  .config(routing);
  