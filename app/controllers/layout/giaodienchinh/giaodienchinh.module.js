import angular from 'angular';
import routing from './giaodienchinh.route';
import component from './giaodienchinh.component';
import service from './giaodienchinh.service';

import logo from './directives/logo/logo.directive'
import header from './directives/header/header.directive'
import menu from './directives/menu/menu.directive'
import footer from './directives/footer/footer.directive'
/* @ngInject */
angular
  .module('giaodienchinh', [])
  .component('giaodienchinh', component)  
  //.controller('giaodienchinhController', controller)
  .factory('giaodienchinhService', service)  
  .directive('ciGiaodienchinhLogo', logo)
  .directive('ciGiaodienchinhHeader', header)
  .directive('ciGiaodienchinhMenu', menu)
  .directive('ciGiaodienchinhFooter', footer)
  .config(routing);
  