function dangnhapRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('dangnhap', {
      url: '/dangnhap',
      component: 'dangnhap'
    })  
  
  $locationProvider.hashPrefix('');
  $urlRouterProvider.when('', '/dangnhap');
  $urlRouterProvider.when('/', '/dangnhap');
  $urlRouterProvider.otherwise('/dangnhap')
}
/* @ngInject */
export default dangnhapRoutes;
