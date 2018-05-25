import angular from 'angular';
import routing from './doingu.route';
import component from './doingu.component';
import giangvientheokhoa from './giangvientheokhoa/giangvientheokhoa.module'
import lanhdao from './lanhdao/lanhdao.module'
import nhanviencanbo from './nhanviencanbo/nhanviencanbo.module'
import tiensi from './tiensi/tiensi.module'

/* @ngInject */
angular
  .module('doingu', [
    'giangvientheokhoa',
    'lanhdao',
    'nhanviencanbo',
    'tiensi'
  ])
  .component('doingu', component)
  .config(routing);
  