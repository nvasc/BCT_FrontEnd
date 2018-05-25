import angular from 'angular';
import routing from './baocaolanhdao.route';
import component from './baocaolanhdao.component';
import service from './baocaolanhdao.service';

/* @ngInject */
angular
  .module('baocaolanhdao', [])
  .component('baocaolanhdao', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('baocaolanhdaoService', service)
  .config(routing);
  