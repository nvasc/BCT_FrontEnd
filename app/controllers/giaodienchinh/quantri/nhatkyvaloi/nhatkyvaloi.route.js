function nhatkyvaloiRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.quantri.nhatkyvaloi', {
      url: '/quantri/nhatkyvaloi',
      component: 'nhatkyvaloi'
    })
}
/* @ngInject */
export default nhatkyvaloiRoutes;
