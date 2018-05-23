
import 'bootstrap/dist/css/bootstrap.css';
import '@progress/kendo-ui/css/web/kendo.common.css';
import '@progress/kendo-ui/css/web/kendo.bootstrap.css';
import '@progress/kendo-ui/css/web/kendo.bootstrap.mobile.css';
import 'angular-confirm1/css/angular-confirm.css';

import 'font-awesome/css/font-awesome.css';
import 'ionicons/dist/css/ionicons.css';
import 'jvectormap/jquery-jvectormap.css';
import 'angular-loading-bar/build/loading-bar.css';

import 'admin-lte/dist/css/AdminLTE.css';
import 'admin-lte/dist/css/skins/_all-skins.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import animate from 'angular-animate';
import 'angular-confirm1';
import 'angular-loading-bar';

import 'bootstrap/dist/js/bootstrap.js';
import 'fastclick/lib/fastclick.js';
import 'jquery-sparkline/jquery.sparkline.js';
import 'jquery-slimscroll';

//import 'admin-lte/dist/js/adminlte.js';
import '../customizes/admin-lte-angularjs/admin-lte-angularjs.js';

import appConfig from './app.config';
import appRun from './app.run';


//import example from './controllers/example/example.module';
//import example2 from './controllers/example2/example2.module';

// single page
import dangnhap from './controllers/khonggiaodien/dangnhap/dangnhap.module';
import quenmatkhau from './controllers/khonggiaodien/quenmatkhau/quenmatkhau.module';
import thongbao from './controllers/khonggiaodien/thongbao/thongbao.module';

//multi pages
import giaodienchinh from './controllers/layout/giaodienchinh/giaodienchinh.module';
import kiemsoatchung from './controllers/giaodienchinh/kiemsoatchung/kiemsoatchung.module';
import nhapkhaubaocao from './controllers/giaodienchinh/nhapkhaubaocao/nhapkhaubaocao.module';

//'example', 'example2', 
angular
  .module('app', [
    uirouter, animate, 'angular-loading-bar', 'cp.ngConfirm', 
    'dangnhap', 'quenmatkhau','thongbao' , 
    'giaodienchinh', 'kiemsoatchung', 'nhapkhaubaocao'
  ])
 .config(appConfig)
 .run(appRun);
