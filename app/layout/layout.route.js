function layoutRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('layout', {
      url: '/layout',
      component: 'layout'
    })
}
/* @ngInject */
export default layoutRoutes;
