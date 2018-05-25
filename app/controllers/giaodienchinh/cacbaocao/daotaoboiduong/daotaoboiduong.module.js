import angular from 'angular';
import routing from './daotaoboiduong.route';
import component from './daotaoboiduong.component';
import service from './daotaoboiduong.service';

/* @ngInject */
angular
  .module('daotaoboiduong', [])
  .component('daotaoboiduong', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('daotaoboiduongService', service)
  .config(routing);
  