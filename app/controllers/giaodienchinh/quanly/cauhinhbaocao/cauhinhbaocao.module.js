import angular from 'angular';
import routing from './cauhinhbaocao.route';
import component from './cauhinhbaocao.component';
import service from './cauhinhbaocao.service';

/* @ngInject */
angular
  .module('cauhinhbaocao', [])
  .component('cauhinhbaocao', component)  
  .factory('cauhinhbaocaoService', service)
  .config(routing);
  