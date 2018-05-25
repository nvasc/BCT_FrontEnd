import angular from 'angular';
import routing from './taikhoan.route';
import component from './taikhoan.component';
import service from './taikhoan.service';

/* @ngInject */
angular
  .module('taikhoan', [])
  .component('taikhoan', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('taikhoanService', service)
  .config(routing);
  