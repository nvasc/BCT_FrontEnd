import angular from 'angular';
import routing from './quanly.route';
import component from './quanly.component';

import bieumau from './bieumau/bieumau.module';
import danhsachtruong from './danhsachtruong/danhsachtruong.module';
import taikhoan from './taikhoan/taikhoan.module';
import phanquyen from './phanquyen/phanquyen.module';
import loaihinhdaotao from './loaihinhdaotao/loaihinhdaotao.module';
import nganhdaotao from './nganhdaotao/nganhdaotao.module';

/* @ngInject */
angular
  .module('quanly', [ 
    'bieumau', 'danhsachtruong','taikhoan', 'phanquyen',
    'loaihinhdaotao', 'nganhdaotao'
  ])
  .component('quanly', component) 
  .config(routing);
  