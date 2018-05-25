function daotaoboiduongRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.daotaoboiduong', {
      url: '/cacbaocao/daotaoboiduong',
      component: 'daotaoboiduong'
    })
}
/* @ngInject */
export default daotaoboiduongRoutes;
