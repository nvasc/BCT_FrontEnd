function dangnhapRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quantri.dangnhap', {
      url: '/quantri/dangnhap',
      component: 'dangnhap'
    })
}
/* @ngInject */
export default dangnhapRoutes;
