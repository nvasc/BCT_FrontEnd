function forgotpasswordRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('forgotpassword', {
      url: '/forgotpassword',
      component: 'forgotpassword'
    })  
  
  $locationProvider.hashPrefix('');
  $urlRouterProvider.when('', '/forgotpassword');
  $urlRouterProvider.when('/', '/forgotpassword');
  $urlRouterProvider.otherwise('/forgotpassword')
}
/* @ngInject */
export default forgotpasswordRoutes;
