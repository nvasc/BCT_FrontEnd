import angular from 'angular';
import routing from './nhapkhaubaocao.route';
import component from './nhapkhaubaocao.component';
import service from './nhapkhaubaocao.service';
//import controller from './kiemsoatchung.controller';

/* @ngInject */
angular
  .module('nhapkhaubaocao', [])
  .component('nhapkhaubaocao', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('nhapkhaubaocaoService', service)
  .config(routing);
  