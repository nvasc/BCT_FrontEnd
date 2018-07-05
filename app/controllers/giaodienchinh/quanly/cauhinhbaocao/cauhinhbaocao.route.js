function cauhinhbaocaoRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.cauhinhbaocao', {
      url: '/quanly/cauhinhbaocao',
      component: 'cauhinhbaocao'
    })
}
/* @ngInject */
export default cauhinhbaocaoRoutes;
