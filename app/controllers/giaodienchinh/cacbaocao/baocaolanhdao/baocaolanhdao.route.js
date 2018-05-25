function baocaolanhdaoRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.baocaolanhdao', {
      url: '/cacbaocao/baocaolanhdao',
      component: 'baocaolanhdao'
    })
}
/* @ngInject */
export default baocaolanhdaoRoutes;
