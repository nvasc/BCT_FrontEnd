import angular from 'angular';
import routing from './kiemsoatchung.route';
import component from './kiemsoatchung.component';
import service from './kiemsoatchung.service';
//import controller from './kiemsoatchung.controller';

/* @ngInject */
angular
  .module('kiemsoatchung', [])
  .component('kiemsoatchung', component) 
  //.controller('kiemsoatchungController', controller)
  .factory('kiemsoatchungService', service)
  .config(routing);
  