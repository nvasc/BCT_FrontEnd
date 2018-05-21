function exampleRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('example', {
      url: '/example',
      component: 'example'
    })
}
/* @ngInject */
export default exampleRoutes;
