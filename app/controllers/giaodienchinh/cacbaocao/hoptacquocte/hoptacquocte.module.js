import angular from 'angular';
import routing from './hoptacquocte.route';
import component from './hoptacquocte.component';
import baocaochung from './baocaochung/baocaochung.module'

/* @ngInject */
angular
  .module('hoptacquocte', [
    'baocaochung'
  ])
  .component('hoptacquocte', component)
  .config(routing);
  