function nganhdaotaoRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.nganhdaotao', {
      url: '/quanly/nganhdaotao',
      component: 'nganhdaotao'
    })
}
/* @ngInject */
export default nganhdaotaoRoutes;
