function dichvuchayngamRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quantri.dichvuchayngam', {
      url: '/quantri/dichvuchayngam',
      component: 'dichvuchayngam'
    })
}
/* @ngInject */
export default dichvuchayngamRoutes;
