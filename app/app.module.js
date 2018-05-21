
import '@progress/kendo-ui/css/web/kendo.common.css';
import '@progress/kendo-ui/css/web/kendo.bootstrap.css';
import '@progress/kendo-ui/css/web/kendo.bootstrap.mobile.css';
import 'angular-confirm1/css/angular-confirm.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'admin-lte/dist/css/adminlte.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import example from './example/example.module';
import example2 from './example2/example2.module';
import login from './login/login.module';
import 'angular-confirm1';
import 'admin-lte/dist/js/adminlte.js';

angular.module('app', [
  uirouter, 'cp.ngConfirm', 'example', 'example2', 'login'
]);
