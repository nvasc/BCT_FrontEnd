function luuhocsinhController ($scope, luuhocsinhService) {
  const vm = this;
  vm.title = luuhocsinhService.title();
}

/* @ngInject */
export default luuhocsinhController;