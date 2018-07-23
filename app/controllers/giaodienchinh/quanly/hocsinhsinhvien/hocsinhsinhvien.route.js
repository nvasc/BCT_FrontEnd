function hocsinhsinhvienRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quanly.hocsinhsinhvien', {
      url: '/quanly/hocsinhsinhvien',
      component: 'hocsinhsinhvien'
    })
}
/* @ngInject */
export default hocsinhsinhvienRoutes;
