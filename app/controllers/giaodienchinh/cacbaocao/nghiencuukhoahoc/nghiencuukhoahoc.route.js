function nghiencuukhoahocRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.nghiencuukhoahoc', {
      url: '/cacbaocao/nghiencuukhoahoc',
      component: 'nghiencuukhoahoc'
    })
}
/* @ngInject */
export default nghiencuukhoahocRoutes;
