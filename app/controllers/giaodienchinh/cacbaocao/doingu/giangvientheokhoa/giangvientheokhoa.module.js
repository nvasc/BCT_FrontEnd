import angular from 'angular';
import routing from './giangvientheokhoa.route';
import component from './giangvientheokhoa.component';
import service from './giangvientheokhoa.service';

/* @ngInject */
angular
  .module('giangvientheokhoa', [])
  .component('giangvientheokhoa', component)  
  .factory('giangvientheokhoaService', service)
  .config(routing);
  