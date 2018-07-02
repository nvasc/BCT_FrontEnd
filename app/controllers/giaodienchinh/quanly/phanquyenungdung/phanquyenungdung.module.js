import angular from 'angular';
import routing from './phanquyenungdung.route';
import component from './phanquyenungdung.component';
import service from './phanquyenungdung.service';

/* @ngInject */
angular
  .module('phanquyenungdung', [])
  .component('phanquyenungdung', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('phanquyenungdungService', service)
  .config(routing);
  