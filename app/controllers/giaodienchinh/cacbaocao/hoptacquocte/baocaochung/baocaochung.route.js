function baocaochungRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.hoptacquocte.baocaochung', {
      url: '/cacbaocao/hoptacquocte/baocaochung',
      component: 'baocaochung'
    })
}
/* @ngInject */
export default baocaochungRoutes;
