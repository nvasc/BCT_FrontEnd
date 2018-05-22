
import '@progress/kendo-ui/css/web/kendo.common.css';
import '@progress/kendo-ui/css/web/kendo.bootstrap.css';
import '@progress/kendo-ui/css/web/kendo.bootstrap.mobile.css';
import 'angular-confirm1/css/angular-confirm.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.min.css';
import 'jvectormap/jquery-jvectormap.css';

import 'admin-lte/dist/css/adminlte.css';
import 'admin-lte/dist/css/adminLTE.min.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'angular-confirm1';
import 'admin-lte/dist/js/adminlte.js';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'fastclick/lib/fastclick.js';
import 'jquery-sparkline/jquery.sparkline.min.js';


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
