import angular from 'angular';
import routing from './tongiao.route';
import component from './tongiao.component';
import service from './tongiao.service';

/* @ngInject */
angular
  .module('tongiao', [])
  .component('tongiao', component)  
  .factory('tongiaoService', service)
  .config(routing);
  