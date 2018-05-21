function exampleRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('example', {
      url: '/example',
      component: 'example'
    })
    
  $locationProvider.hashPrefix('');
  $urlRouterProvider.when('', '/example');
  $urlRouterProvider.when('/', '/example');
  $urlRouterProvider.otherwise('/example')
  
}
/* @ngInject */
export default exampleRoutes;
