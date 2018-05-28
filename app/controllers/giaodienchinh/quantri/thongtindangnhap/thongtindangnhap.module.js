import angular from 'angular';
import routing from './thongtindangnhap.route';
import component from './thongtindangnhap.component';
import service from './thongtindangnhap.service';

/* @ngInject */
angular
  .module('thongtindangnhap', [])
  .component('thongtindangnhap', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('thongtindangnhapService', service)
  .config(routing);
  