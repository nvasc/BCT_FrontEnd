
import 'bootstrap/dist/css/bootstrap.css';
import '@progress/kendo-ui/css/web/kendo.common.css';
import '@progress/kendo-ui/css/web/kendo.bootstrap.css';
import '@progress/kendo-ui/css/web/kendo.bootstrap.mobile.css';
import 'angular-confirm1/css/angular-confirm.css';

import 'font-awesome/css/font-awesome.css';
import 'ionicons/dist/css/ionicons.css';
import 'jvectormap/jquery-jvectormap.css';

import 'admin-lte/dist/css/AdminLTE.css';

import 'admin-lte/dist/css/skins/_all-skins.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-confirm1';

import 'bootstrap/dist/js/bootstrap.js';
import 'fastclick/lib/fastclick.js';
import 'jquery-sparkline/jquery.sparkline.js';
import 'jquery-slimscroll';
import 'admin-lte/dist/js/adminlte.js';


import example from './controllers/example/example.module';
import example2 from './controllers/example2/example2.module';
import dangnhap from './controllers/dangnhap/dangnhap.module';
import giaodien from './controllers/giaodien/giaodien.module';
import quenmatkhau from './controllers/quenmatkhau/quenmatkhau.module';
import thongbao from './controllers/thongbao/thongbao.module';
angular.module('app', [
  uirouter, 'cp.ngConfirm', 'example', 'example2', 
  'dangnhap', 'giaodien','quenmatkhau','thongbao'
]);
