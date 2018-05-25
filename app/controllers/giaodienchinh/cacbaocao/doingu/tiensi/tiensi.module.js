import angular from 'angular';
import routing from './tiensi.route';
import component from './tiensi.component';
import service from './tiensi.service';

/* @ngInject */
angular
  .module('tiensi', [])
  .component('tiensi', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('tiensiService', service)
  .config(routing);
  