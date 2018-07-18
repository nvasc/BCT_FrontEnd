import angular from 'angular';
import routing from './quantri.route';
import component from './quantri.component';

import api from './api/api.module';
import client from './client/client.module';
import thongtindangnhap from './thongtindangnhap/thongtindangnhap.module';
import nhatkyvaloi from './nhatkyvaloi/nhatkyvaloi.module';
import chucnang from './chucnang/chucnang.module';
import dichvuchayngam from './dichvuchayngam/dichvuchayngam.module';

/* @ngInject */
angular
  .module('quantri', [ 
    'api', 'nhatkyvaloi','thongtindangnhap', 
    'client', 'chucnang', 'dichvuchayngam'
  ])
  .component('quantri', component) 
  .config(routing);
  