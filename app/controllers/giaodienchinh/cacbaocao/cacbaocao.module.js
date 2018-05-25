import angular from 'angular';
import routing from './cacbaocao.route';
import component from './cacbaocao.component';
import baocaolanhdao from './baocaolanhdao/baocaolanhdao.module';
import tuyensinh from './tuyensinh/tuyensinh.module';
import daihoc from './daihoc/daihoc.module';
import sinhvientotnghiep from './sinhvientotnghiep/sinhvientotnghiep.module';
import totnghieptheonganh from './totnghieptheonganh/totnghieptheonganh.module';

/* @ngInject */
angular
  .module('cacbaocao', [ 
    'baocaolanhdao', 'tuyensinh','daihoc','sinhvientotnghiep','totnghieptheonganh'
  ])
  .component('cacbaocao', component) 
  .config(routing);
  