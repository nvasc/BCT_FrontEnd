import angular from 'angular';
import routing from './doingu.route';
import component from './doingu.component';
import lanhdao from './lanhdao/lanhdao.module'
import giangvientheokhoa from './giangvientheokhoa/giangvientheokhoa.module'
import tiensi from './tiensi/tiensi.module'
import giangviennhanvien from './giangviennhanvien/giangviennhanvien.module'

/* @ngInject */
angular
.module('doingu',['lanhdao','giangvientheokhoa','tiensi','giangviennhanvien'
])
.component('doingu', component)
.config(routing);
  