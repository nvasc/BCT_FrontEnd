import angular from 'angular';
import routing from './thuchitaichinh.route';
import component from './thuchitaichinh.component';
import service from './thuchitaichinh.service';

/* @ngInject */
angular
  .module('thuchitaichinh', [])
  .component('thuchitaichinh', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('thuchitaichinhService', service)
  .config(routing);
  