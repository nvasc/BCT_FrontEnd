import angular from 'angular';
import routing from './phanquyennguoidung.route';
import component from './phanquyennguoidung.component';
import service from './phanquyennguoidung.service';

/* @ngInject */
angular
  .module('phanquyennguoidung', [])
  .component('phanquyennguoidung', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('phanquyennguoidungService', service)
  .config(routing);
  