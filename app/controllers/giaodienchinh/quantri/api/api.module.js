import angular from 'angular';
import routing from './api.route';
import component from './api.component';
import service from './api.service';

/* @ngInject */
angular
  .module('api', [])
  .component('api', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('apiService', service)
  .config(routing);
  