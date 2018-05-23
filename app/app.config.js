function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $urlRouterProvider.when('', '/dangnhap');
  $urlRouterProvider.when('/', '/dangnhap');
  $urlRouterProvider.otherwise('/dangnhap');
}

/* @ngInject */
export default appConfig;
  