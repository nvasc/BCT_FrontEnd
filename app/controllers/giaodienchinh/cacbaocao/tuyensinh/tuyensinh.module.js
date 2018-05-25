import angular from 'angular';
import routing from './tuyensinh.route';
import component from './tuyensinh.component';
import service from './tuyensinh.service';

/* @ngInject */
angular
  .module('tuyensinh', [])
  .component('tuyensinh', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('tuyensinhService', service)
  .config(routing);
  