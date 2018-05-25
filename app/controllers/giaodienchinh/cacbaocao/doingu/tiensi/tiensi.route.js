function tiensiRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.doingu.tiensi', {
      url: '/cacbaocao/doingu/tiensi',
      component: 'tiensi'
    })
}
/* @ngInject */
export default tiensiRoutes;
