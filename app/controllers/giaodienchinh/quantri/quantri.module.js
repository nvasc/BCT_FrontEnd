import angular from 'angular';
import routing from './quantri.route';
import component from './quantri.component';

import api from './api/api.module';
import client from './client/client.module';
import thongtindangnhap from './thongtindangnhap/thongtindangnhap.module';
import nhatkyvaloi from './nhatkyvaloi/nhatkyvaloi.module';
import chucnang from './chucnang/chucnang.module';
/* @ngInject */
angular
  .module('quantri', [ 
    'api', 'nhatkyvaloi','thongtindangnhap', 
    'client', 'chucnang'
  ])
  .component('quantri', component) 
  .config(routing);
  