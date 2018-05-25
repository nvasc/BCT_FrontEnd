import angular from 'angular';
import routing from './danhsachtruong.route';
import component from './danhsachtruong.component';
import service from './danhsachtruong.service';

/* @ngInject */
angular
  .module('danhsachtruong', [])
  .component('danhsachtruong', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('danhsachtruongService', service)
  .config(routing);
  