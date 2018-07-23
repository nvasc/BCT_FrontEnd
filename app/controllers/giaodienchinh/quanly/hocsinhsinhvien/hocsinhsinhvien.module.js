import angular from 'angular';
import routing from './hocsinhsinhvien.route';
import component from './hocsinhsinhvien.component';
import service from './hocsinhsinhvien.service';

/* @ngInject */
angular
  .module('hocsinhsinhvien', [])
  .component('hocsinhsinhvien', component)  
  .factory('hocsinhsinhvienService', service)
  .config(routing);
  