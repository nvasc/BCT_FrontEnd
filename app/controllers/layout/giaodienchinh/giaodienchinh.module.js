import angular from 'angular';
import routing from './giaodienchinh.route';
import component from './giaodienchinh.component';
import service from './giaodienchinh.service';

/* @ngInject */
angular
  .module('giaodienchinh', [])
  .component('giaodienchinh', component)  
  //.controller('giaodienchinhController', controller)
  .factory('giaodienchinhService', service)
  .config(routing);
  