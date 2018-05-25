function giangvientheokhoaRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.doingu.giangvientheokhoa', {
      url: '/cacbaocao/doingu/giangvientheokhoa',
      component: 'giangvientheokhoa'
    })
}
/* @ngInject */
export default giangvientheokhoaRoutes;
