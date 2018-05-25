function thuchitaichinhRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.thuchitaichinh', {
      url: '/cacbaocao/thuchitaichinh',
      component: 'thuchitaichinh'
    })
}
/* @ngInject */
export default thuchitaichinhRoutes;
