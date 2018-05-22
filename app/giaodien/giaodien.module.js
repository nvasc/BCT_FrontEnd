import angular from 'angular';
import routing from './giaodien.route';
import component from './giaodien.component';
import service from './giaodien.service';

/* @ngInject */
angular
  .module('giaodien', [])
  .component('giaodien', component)  
  //.controller('giaodienController', controller)
  .factory('giaodienService', service)
  .config(routing);
  