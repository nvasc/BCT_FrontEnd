import toastr from 'toastr';
var base64 = require('base-64');

function appRun($rootScope, cfpLoadingBar, $timeout, $window, $location, loginInfoFactory, $state) {

  if ($rootScope.cfpLoadingBarStarted) {
    $rootScope.cfpLoadingBarStarted();
  }
  $rootScope.cfpLoadingBarStarted = $rootScope.$on('cfpLoadingBar:started', function () {
    $timeout(function () {
      $.AdminLTE.clockScreen.show();
    });    
  });

  if ($rootScope.cfpLoadingBarCompleted) {
    $rootScope.cfpLoadingBarCompleted();
  }  
  $rootScope.cfpLoadingBarCompleted = $rootScope.$on('cfpLoadingBar:completed', function () {
    $timeout(function () {
      $.AdminLTE.clockScreen.hide();
    });        
  }); 
  /*eslint-disable */
  
  /*eslint-enable */
  $rootScope.toastr = toastr;

  $rootScope.toastr.options = {
    'closeButton': true,
    'debug': false,
    'newestOnTop': true,
    'progressBar': true,
    'positionClass': 'toast-bottom-right',
    'preventDuplicates': false,
    'onclick': null,
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '5000',
    'extendedTimeOut': '1000',
    'showEasing': 'swing',
    'hideEasing': 'linear',
    'showMethod': 'fadeIn',
    'hideMethod': 'fadeOut'
  }

  $rootScope.base64 = base64;

  function init() {
    if ($state.$current.name.indexOf('.') > 0) {
      $('#header-thong-bao').slimScroll();
      $.AdminLTE.init();
    }    
  }
  
  $timeout(function () {
    init();   
    loginInfoFactory.checkLogin();
  });
}
  
/* @ngInject */
export default appRun;