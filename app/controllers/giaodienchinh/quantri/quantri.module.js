import angular from 'angular';
import routing from './quantri.route';
import component from './quantri.component';
import api from './api/api.module';
import thongtindangnhap from './thongtindangnhap/thongtindangnhap.module';
import nhatkyvaloi from './nhatkyvaloi/nhatkyvaloi.module';

/* @ngInject */
angular
  .module('quantri', [ 
    'api', 'nhatkyvaloi','thongtindangnhap'
  ])
  .component('quantri', component) 
  .config(routing);
  