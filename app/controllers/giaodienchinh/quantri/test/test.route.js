function testRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    //giaodienchinh.quantri.test phai giong trong route cua menu.html
    .state('giaodienchinh.quantri.test', {
      url: '/quantri/test',
      component: 'test'
    })
}
/* @ngInject */
export default testRoutes;
