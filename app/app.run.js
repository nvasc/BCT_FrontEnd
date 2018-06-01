import toastr from 'toastr';
var jwtDecode = require('jwt-decode');

function appRun($rootScope, cfpLoadingBar, $timeout, $window) {

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
  console.log(jwtDecode('eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibmdoaWVwdm8iLCJzdWIiOiJuZ2hpZXB2byIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJNYW5hZ2VyIiwiU3VwZXJ2aXNvciJdLCJuYmYiOjE1Mjc0OTQxMzgsImV4cCI6MTUyNzQ5NTkzOCwiaXNzIjoiaHR0cDovL2FzY3ZuLmNvbS52bi8iLCJhdWQiOiIwOTkxNTNjMjYyNTE0OWJjOGVjYjNlODVlMDNmMDAyMiJ9.-7ISl4-7nK37P62rB-PZl-s3HI-hPHZhnKZxKKzbs_s'))
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
  //$rootScope.toastr.info('<strong>Bộ Công Thương</strong>', {allowHtml: true});
}
  
/* @ngInject */
export default appRun;