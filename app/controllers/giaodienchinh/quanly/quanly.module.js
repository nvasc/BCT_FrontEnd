import angular from 'angular';
import routing from './quanly.route';
import component from './quanly.component';

import bieumau from './bieumau/bieumau.module';
import danhsachtruong from './danhsachtruong/danhsachtruong.module';
import taikhoan from './taikhoan/taikhoan.module';
import phanquyennguoidung from './phanquyennguoidung/phanquyennguoidung.module';
import phanquyenungdung from './phanquyenungdung/phanquyenungdung.module';
import loaihinhdaotao from './loaihinhdaotao/loaihinhdaotao.module';
import nganhdaotao from './nganhdaotao/nganhdaotao.module';
import cauhinhbaocao from './cauhinhbaocao/cauhinhbaocao.module';
import tinhthanh from './tinhthanh/tinhthanh.module';
import dantoc from './dantoc/dantoc.module';
import tongiao from './tongiao/tongiao.module';
import hocsinhsinhvien from './hocsinhsinhvien/hocsinhsinhvien.module';

/* @ngInject */
angular
  .module('quanly', [ 
    'bieumau', 'danhsachtruong','taikhoan', 'phanquyennguoidung',
    'phanquyenungdung', 'loaihinhdaotao', 'nganhdaotao', 'cauhinhbaocao',
    'tinhthanh', 'dantoc', 'tongiao',
    'hocsinhsinhvien'
  ])
  .component('quanly', component) 
  .config(routing);
  