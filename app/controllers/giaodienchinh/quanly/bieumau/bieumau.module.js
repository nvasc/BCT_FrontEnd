import angular from 'angular';
import routing from './bieumau.route';
import component from './bieumau.component';
import service from './bieumau.service';

/* @ngInject */
angular
  .module('bieumau', [])
  .component('bieumau', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('bieumauService', service)
  .config(routing);
  