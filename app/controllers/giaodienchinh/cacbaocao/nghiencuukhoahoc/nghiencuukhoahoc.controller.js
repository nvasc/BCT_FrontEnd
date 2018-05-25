function nghiencuukhoahocController ($scope, nghiencuukhoahocService) {
  const vm = this;
  vm.title = nghiencuukhoahocService.title();
}

/* @ngInject */
export default nghiencuukhoahocController;