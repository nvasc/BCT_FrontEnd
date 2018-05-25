import angular from 'angular';
import routing from './phanquyen.route';
import component from './phanquyen.component';
import service from './phanquyen.service';

/* @ngInject */
angular
  .module('phanquyen', [])
  .component('phanquyen', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('phanquyenService', service)
  .config(routing);
  