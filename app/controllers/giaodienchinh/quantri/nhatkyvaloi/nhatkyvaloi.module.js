import angular from 'angular';
import routing from './nhatkyvaloi.route';
import component from './nhatkyvaloi.component';
import service from './nhatkyvaloi.service';

/* @ngInject */
angular
  .module('nhatkyvaloi', [])
  .component('nhatkyvaloi', component)  
  .factory('nhatkyvaloiService', service)
  .config(routing);
  