import angular from 'angular';
import routing from './tinhthanh.route';
import component from './tinhthanh.component';
import service from './tinhthanh.service';

/* @ngInject */
angular
  .module('tinhthanh', [])
  .component('tinhthanh', component)  
  .factory('tinhthanhService', service)
  .config(routing);
  