import angular from 'angular';
import routing from './nhomquyen.route';
import component from './nhomquyen.component';
import service from './nhomquyen.service';

/* @ngInject */
angular
  .module('nhomquyen', [])
  .component('nhomquyen', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('nhomquyenService', service)
  .config(routing);
  