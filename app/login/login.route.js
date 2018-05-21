function loginRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login'
    })  
  
  $locationProvider.hashPrefix('');
  $urlRouterProvider.when('', '/login');
  $urlRouterProvider.when('/', '/login');
  $urlRouterProvider.otherwise('/login')
}
/* @ngInject */
export default loginRoutes;
