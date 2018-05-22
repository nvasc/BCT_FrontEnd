import angular from 'angular';
import routing from './dangnhap.route';
import component from './dangnhap.component';
import service from './dangnhap.service';
//import controller from './dangnhap.controller';

/* @ngInject */
angular
  .module('dangnhap', [])
  .component('dangnhap', component)  
  //.controller('dangnhapController', controller)
  .factory('dangnhapService', service)
  .config(routing);
  