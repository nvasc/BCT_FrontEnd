function tinhthanhRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quantri.tinhthanh', {
      url: '/quantri/tinhthanh',
      component: 'tinhthanh'
    })
}
/* @ngInject */
export default tinhthanhRoutes;
