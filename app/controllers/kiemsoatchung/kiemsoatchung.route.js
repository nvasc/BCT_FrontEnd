function kiemsoatchungRoutes($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('giaodienchinh.kiemsoatchung', {
      url: '/kiemsoatchung',
      component: 'kiemsoatchung'
    })
}
/* @ngInject */
export default kiemsoatchungRoutes;
