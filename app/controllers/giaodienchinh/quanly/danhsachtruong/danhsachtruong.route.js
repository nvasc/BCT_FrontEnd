function danhsachtruongRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.danhsachtruong', {
      url: '/quanly/danhsachtruong',
      component: 'danhsachtruong'
    })
}
/* @ngInject */
export default danhsachtruongRoutes;
