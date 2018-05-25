import angular from 'angular';
import routing from './sinhviennuocngoaidanghoc.route';
import component from './sinhviennuocngoaidanghoc.component';
import service from './sinhviennuocngoaidanghoc.service';

/* @ngInject */
angular
  .module('sinhviennuocngoaidanghoc', [])
  .component('sinhviennuocngoaidanghoc', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('sinhviennuocngoaidanghocService', service)
  .config(routing);
  