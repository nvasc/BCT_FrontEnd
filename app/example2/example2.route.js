class Example2Routes {
  constructor($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    .state('example2', {
      url: '/example2',
      component: 'example2'
    })
  }
  static Example2RoutesInstance($stateProvider, $urlRouterProvider, $locationProvider) {
    return new Example2Routes($stateProvider, $urlRouterProvider, $locationProvider)
  }
}

Example2Routes.Example2RoutesInstance.$inject = [
  '$stateProvider', 
  '$urlRouterProvider', 
  '$locationProvider'
];

export default Example2Routes.Example2RoutesInstance;
