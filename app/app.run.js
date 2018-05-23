function appRun($rootScope, cfpLoadingBar, $timeout) {

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
}
  
/* @ngInject */
export default appRun;