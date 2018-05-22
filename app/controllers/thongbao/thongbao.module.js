import angular from 'angular';
import routing from './thongbao.route';
import component from './thongbao.component';
import service from './thongbao.service';
//import controller from './thongbao.controller';

/* @ngInject */
angular
  .module('thongbao', [])
  .component('thongbao', component)  
  //.controller('thongbaoController', controller)
  .factory('thongbaoService', service)
  .config(routing);
  