function appConfig($stateProvider, $urlRouterProvider, $locationProvider, 
  cfpLoadingBarProvider, $httpProvider) {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.when('', '/dangnhap');
  $urlRouterProvider.when('/', '/dangnhap');
  $urlRouterProvider.otherwise('/dangnhap');
  $httpProvider.interceptors.push('oauthInterceptorFactory');
}
/* @ngInject */
export default appConfig;
  