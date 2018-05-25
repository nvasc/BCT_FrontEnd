import angular from 'angular';
import routing from './nhanviencanbo.route';
import component from './nhanviencanbo.component';
import service from './nhanviencanbo.service';

/* @ngInject */
angular
  .module('nhanviencanbo', [])
  .component('nhanviencanbo', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('nhanviencanboService', service)
  .config(routing);
  