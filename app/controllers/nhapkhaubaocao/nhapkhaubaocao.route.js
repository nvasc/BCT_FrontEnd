function nhapkhaubaocaoRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.nhapkhaubaocao', {
      url: '/nhapkhaubaocao',
      component: 'nhapkhaubaocao'
    })
}
/* @ngInject */
export default nhapkhaubaocaoRoutes;
