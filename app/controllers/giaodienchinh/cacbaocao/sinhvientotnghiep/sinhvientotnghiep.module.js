import angular from 'angular';
import routing from './sinhvientotnghiep.route';
import component from './sinhvientotnghiep.component';
import service from './sinhvientotnghiep.service';

/* @ngInject */
angular
  .module('sinhvientotnghiep', [])
  .component('sinhvientotnghiep', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('sinhvientotnghiepService', service)
  .config(routing);
  