import angular from 'angular';
import routing from './hoptacquocte.route';
import component from './hoptacquocte.component';
import baocaochung from './baocaochung/baocaochung.module'
import luuhocsinh from './luuhocsinh/luuhocsinh.module'
import sinhviennuocngoaidanghoc from './sinhviennuocngoaidanghoc/sinhviennuocngoaidanghoc.module'


/* @ngInject */
angular
  .module('hoptacquocte', [
    'baocaochung','luuhocsinh','sinhviennuocngoaidanghoc'
  ])
  .component('hoptacquocte', component)
  .config(routing);
  