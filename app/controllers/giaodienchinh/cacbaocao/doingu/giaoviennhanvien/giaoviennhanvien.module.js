import angular from 'angular';
import routing from './giaoviennhanvien.route';
import component from './giaoviennhanvien.component';
import service from './giaoviennhanvien.service';

/* @ngInject */
angular
  .module('giaoviennhanvien', [])
  .component('giaoviennhanvien', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('giaoviennhanvienService', service)
  .config(routing);
  