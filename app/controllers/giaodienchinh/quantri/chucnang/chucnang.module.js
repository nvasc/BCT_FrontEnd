import angular from 'angular';
import routing from './chucnang.route';
import component from './chucnang.component';
import service from './chucnang.service';

/* @ngInject */
angular
  .module('chucnang', [])
  .component('chucnang', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('chucnangService', service)
  .config(routing);
  