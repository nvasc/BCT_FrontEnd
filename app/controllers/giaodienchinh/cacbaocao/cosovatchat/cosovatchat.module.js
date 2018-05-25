import angular from 'angular';
import routing from './cosovatchat.route';
import component from './cosovatchat.component';
import service from './cosovatchat.service';

/* @ngInject */
angular
  .module('cosovatchat', [])
  .component('cosovatchat', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('cosovatchatService', service)
  .config(routing);
  