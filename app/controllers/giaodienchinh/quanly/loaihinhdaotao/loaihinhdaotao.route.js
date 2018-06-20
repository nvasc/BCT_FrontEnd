function loaihinhdaotaoRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.loaihinhdaotao', {
      url: '/quanly/loaihinhdaotao',
      component: 'loaihinhdaotao'
    })
}
/* @ngInject */
export default loaihinhdaotaoRoutes;
