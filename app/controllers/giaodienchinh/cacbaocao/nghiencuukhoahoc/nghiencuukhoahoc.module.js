import angular from 'angular';
import routing from './nghiencuukhoahoc.route';
import component from './nghiencuukhoahoc.component';
import service from './nghiencuukhoahoc.service';

/* @ngInject */
angular
  .module('nghiencuukhoahoc', [])
  .component('nghiencuukhoahoc', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('nghiencuukhoahocService', service)
  .config(routing);
  