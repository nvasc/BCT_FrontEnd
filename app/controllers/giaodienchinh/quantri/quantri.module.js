import angular from 'angular';
import routing from './quantri.route';
import component from './quantri.component';

import api from './api/api.module';
import client from './client/client.module';
import thongtindangnhap from './thongtindangnhap/thongtindangnhap.module';
import nhatkyvaloi from './nhatkyvaloi/nhatkyvaloi.module';
import chucnang from './chucnang/chucnang.module';
import tinhthanh from './tinhthanh/tinhthanh.module';
import dantoc from './dantoc/dantoc.module';
import tongiao from './tongiao/tongiao.module';
import dichvuchayngam from './dichvuchayngam/dichvuchayngam.module';

/* @ngInject */
angular
  .module('quantri', [ 
    'api', 'nhatkyvaloi','thongtindangnhap', 
    'client', 'chucnang', 'tinhthanh', 'dantoc', 'tongiao',
    'dichvuchayngam'
  ])
  .component('quantri', component) 
  .config(routing);
  