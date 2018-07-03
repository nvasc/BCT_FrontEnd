function phanquyennguoidungRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.phanquyennguoidung', {
      url: '/quanly/phanquyennguoidung',
      component: 'phanquyennguoidung'
    })
}
/* @ngInject */
export default phanquyennguoidungRoutes;
