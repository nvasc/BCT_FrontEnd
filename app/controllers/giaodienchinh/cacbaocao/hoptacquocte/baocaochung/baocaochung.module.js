import angular from 'angular';
import routing from './baocaochung.route';
import component from './baocaochung.component';
import service from './baocaochung.service';

/* @ngInject */
angular
  .module('baocaochung', [])
  .component('baocaochung', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('baocaochungService', service)
  .config(routing);
  