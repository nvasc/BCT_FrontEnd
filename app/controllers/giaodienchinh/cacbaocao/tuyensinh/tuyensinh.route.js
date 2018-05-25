function tuyensinhRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.tuyensinh', {
      url: '/cacbaocao/tuyensinh',
      component: 'tuyensinh'
    })
}
/* @ngInject */
export default tuyensinhRoutes;
