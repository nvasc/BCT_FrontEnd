import angular from 'angular';
import routing from './lanhdao.route';
import component from './lanhdao.component';
import service from './lanhdao.service';

/* @ngInject */
angular
  .module('lanhdao', [])
  .component('lanhdao', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('lanhdaoService', service)
  .config(routing);
  