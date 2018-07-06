import angular from 'angular';
import routing from './dichvuchayngam.route';
import component from './dichvuchayngam.component';
import service from './dichvuchayngam.service';

/* @ngInject */
angular
  .module('dichvuchayngam', [])
  .component('dichvuchayngam', component)  
  //.controller('kiemsoatchungController', controller)
  .factory('dichvuchayngamService', service)
  .config(routing);
  