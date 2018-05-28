import angular from 'angular';
import routing from './giangviennhanvien.route';
import component from './giangviennhanvien.component';
import service from './giangviennhanvien.service';

/* @ngInject */
angular
  .module('giangviennhanvien', [])
  .component('giangviennhanvien', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('giangviennhanvienService', service)
  .config(routing);
  