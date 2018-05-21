import angular from 'angular';
import routing from './forgotpassword.route';
import component from './forgotpassword.component';
import service from './forgotpassword.service';
//import controller from './forgotpassword.controller';

/* @ngInject */
angular
  .module('forgotpassword', [])
  .component('forgotpassword', component)  
  //.controller('forgotpasswordController', controller)
  .factory('forgotpasswordService', service)
  .config(routing);
  