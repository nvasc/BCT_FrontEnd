function quenmatkhauRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('quenmatkhau', {
      url: '/quenmatkhau',
      component: 'quenmatkhau'
    })  
}
/* @ngInject */
export default quenmatkhauRoutes;
