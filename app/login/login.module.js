import angular from 'angular';
import routing from './login.route';
import component from './login.component';
import service from './login.service';
//import controller from './login.controller';

/* @ngInject */
angular
  .module('login', [])
  .component('login', component)  
  //.controller('loginController', controller)
  .factory('loginService', service)
  .config(routing);
  