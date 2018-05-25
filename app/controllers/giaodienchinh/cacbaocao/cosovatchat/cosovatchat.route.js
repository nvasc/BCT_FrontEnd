function cosovatchatRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.cacbaocao.cosovatchat', {
      url: '/cacbaocao/cosovatchat',
      component: 'cosovatchat'
    })
}
/* @ngInject */
export default cosovatchatRoutes;
