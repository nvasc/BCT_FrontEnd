import angular from 'angular';
import routing from './loaihinhdaotao.route';
import component from './loaihinhdaotao.component';
import service from './loaihinhdaotao.service';

/* @ngInject */
angular
  .module('loaihinhdaotao', [])
  .component('loaihinhdaotao', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('loaihinhdaotaoService', service)
  .config(routing);
  