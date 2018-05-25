import angular from 'angular';
import routing from './cacbaocao.route';
import component from './cacbaocao.component';
import baocaolanhdao from './baocaolanhdao/baocaolanhdao.module';
import tuyensinh from './tuyensinh/tuyensinh.module';
import daihoc from './daihoc/daihoc.module';
import sinhvientotnghiep from './sinhvientotnghiep/sinhvientotnghiep.module';
import totnghieptheonganh from './totnghieptheonganh/totnghieptheonganh.module';
import hoptacquocte from './hoptacquocte/hoptacquocte.module';
import doingu from './doingu/doingu.module';
import daotaoboiduong from './daotaoboiduong/daotaoboiduong.module';
import nghiencuukhoahoc from './nghiencuukhoahoc/nghiencuukhoahoc.module';
import thuchitaichinh from './thuchitaichinh/thuchitaichinh.module';
import cosovatchatc from './cosovatchat/cosovatchat.module';



/* @ngInject */
angular
  .module('cacbaocao', [ 
    'baocaolanhdao', 'tuyensinh','daihoc','sinhvientotnghiep','totnghieptheonganh', 
    'hoptacquocte','doingu','daotaoboiduong','nghiencuukhoahoc','thuchitaichinh','cosovatchat'
  ])
  .component('cacbaocao', component) 
  .config(routing);
  