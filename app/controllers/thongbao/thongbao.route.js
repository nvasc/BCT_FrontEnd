function thongbaoRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('thongbao', {
      url: '/thongbao',
      component: 'thongbao'
    })  
}
/* @ngInject */
export default thongbaoRoutes;
