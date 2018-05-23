import angular from 'angular';
import routing from './nhapkhaubaocao.route';
import component from './nhapkhaubaocao.component';
import service from './nhapkhaubaocao.service';

/* @ngInject */
angular
  .module('nhapkhaubaocao', [])
  .component('nhapkhaubaocao', component)  
  .factory('nhapkhaubaocaoService', service)
  .config(routing);
  