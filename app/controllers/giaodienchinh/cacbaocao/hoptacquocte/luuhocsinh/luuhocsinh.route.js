function luuhocsinhRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.hoptacquocte.luuhocsinh', {
      url: '/cacbaocao/hoptacquocte/luuhocsinh',
      component: 'luuhocsinh'
    })
}
/* @ngInject */
export default luuhocsinhRoutes;
