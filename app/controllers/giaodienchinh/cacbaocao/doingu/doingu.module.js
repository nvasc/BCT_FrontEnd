import angular from 'angular';
import routing from './doingu.route';
import component from './doingu.component';
import lanhdao from './lanhdao/lanhdao.module'
import giangvientheokhoa from './giangvientheokhoa/giangvientheokhoa.module'
import tiensi from './tiensi/tiensi.module'
import giaoviennhanvien from './giaoviennhanvien/giaoviennhanvien.module'

/* @ngInject */
angular
.module('doingu',['lanhdao','giangvientheokhoa','tiensi','giaoviennhanvien'
])
.component('doingu', component)
.config(routing);
  