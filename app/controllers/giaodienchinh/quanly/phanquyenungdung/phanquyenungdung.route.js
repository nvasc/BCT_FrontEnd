function phanquyenungdungRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.phanquyenungdung', {
      url: '/quanly/phanquyenungdung',
      component: 'phanquyenungdung'
    })
}
/* @ngInject */
export default phanquyenungdungRoutes;
