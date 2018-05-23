function appRun($rootScope, cfpLoadingBar, $timeout) {

  var htmlLockScreenStatich = '<div id="lock-screen" style="position: absolute;' +
  'top: 0;left: 0;right:0;bottom: 0;background-color: #000;opacity: 0.1;z-index: 10002;"></div>';

  if ($rootScope.cfpLoadingBarStarted) {
    $rootScope.cfpLoadingBarStarted();
  }
  $rootScope.cfpLoadingBarStarted = $rootScope.$on('cfpLoadingBar:started', function () {
    $timeout(function () {
      $('#lock-screen').remove();
      $('body').append(htmlLockScreenStatich);
    });    
  });

  if ($rootScope.cfpLoadingBarCompleted) {
    $rootScope.cfpLoadingBarCompleted();
  }  
  $rootScope.cfpLoadingBarCompleted = $rootScope.$on('cfpLoadingBar:completed', function () {
    $timeout(function () {
      $('#lock-screen').remove();
    });        
  });  
}
  
/* @ngInject */
export default appRun;