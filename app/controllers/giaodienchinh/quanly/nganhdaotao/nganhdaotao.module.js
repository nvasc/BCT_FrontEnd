import angular from 'angular';
import routing from './nganhdaotao.route';
import component from './nganhdaotao.component';
import service from './nganhdaotao.service';

/* @ngInject */
angular
  .module('nganhdaotao', [])
  .component('nganhdaotao', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('nganhdaotaoService', service)
  .config(routing);
  