import angular from 'angular';
import routing from './daihoc.route';
import component from './daihoc.component';
import service from './daihoc.service';

/* @ngInject */
angular
  .module('daihoc', [])
  .component('daihoc', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('daihocService', service)
  .config(routing);
  