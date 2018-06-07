function nhatkyvaloiController ($scope, nhatkyvaloiService) {
  const vm = this;
  nhatkyvaloiService.init();
}

/* @ngInject */
export default nhatkyvaloiController;