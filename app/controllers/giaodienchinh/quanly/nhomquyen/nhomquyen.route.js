function nhomquyenRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.nhomquyen', {
      url: '/quanly/nhomquyen',
      component: 'nhomquyen'
    })
}
/* @ngInject */
export default nhomquyenRoutes;
