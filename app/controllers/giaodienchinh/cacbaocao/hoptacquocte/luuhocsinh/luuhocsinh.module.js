import angular from 'angular';
import routing from './luuhocsinh.route';
import component from './luuhocsinh.component';
import service from './luuhocsinh.service';

/* @ngInject */
angular
  .module('luuhocsinh', [])
  .component('luuhocsinh', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('luuhocsinhService', service)
  .config(routing);
  