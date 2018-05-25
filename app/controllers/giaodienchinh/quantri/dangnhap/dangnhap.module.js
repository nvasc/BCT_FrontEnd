import angular from 'angular';
import routing from './dangnhap.route';
import component from './dangnhap.component';
import service from './dangnhap.service';

/* @ngInject */
angular
  .module('dangnhap', [])
  .component('dangnhap', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('dangnhapService', service)
  .config(routing);
  