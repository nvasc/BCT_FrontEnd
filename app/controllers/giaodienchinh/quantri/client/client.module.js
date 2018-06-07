import angular from 'angular';
import routing from './client.route';
import component from './client.component';
import service from './client.service';

/* @ngInject */
angular
  .module('client', [])
  .component('client', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('clientService', service)
  .config(routing);
  