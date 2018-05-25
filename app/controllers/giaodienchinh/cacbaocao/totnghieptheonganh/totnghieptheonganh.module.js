import angular from 'angular';
import routing from './totnghieptheonganh.route';
import component from './totnghieptheonganh.component';
import service from './totnghieptheonganh.service';

/* @ngInject */
angular
  .module('totnghieptheonganh', [])
  .component('totnghieptheonganh', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('totnghieptheonganhService', service)
  .config(routing);
  