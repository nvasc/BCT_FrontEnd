function appConfig($stateProvider, $urlRouterProvider, $locationProvider, 
  cfpLoadingBarProvider) {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.when('', '/dangnhap');
  $urlRouterProvider.when('/', '/dangnhap');
  $urlRouterProvider.otherwise('/dangnhap');  
}

/* @ngInject */
export default appConfig;
  