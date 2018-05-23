import angular from 'angular';
import routing from './quenmatkhau.route';
import component from './quenmatkhau.component';
import service from './quenmatkhau.service';
//import controller from './quenmatkhau.controller';

/* @ngInject */
angular
  .module('quenmatkhau', [])
  .component('quenmatkhau', component)  
  //.controller('quenmatkhauController', controller)
  .factory('quenmatkhauService', service)
  .config(routing);
  