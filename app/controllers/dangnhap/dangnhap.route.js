function dangnhapRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('dangnhap', {
      url: '/dangnhap',
      component: 'dangnhap'
    }) 
}
/* @ngInject */
export default dangnhapRoutes;
