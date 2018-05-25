function lanhdaoService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default lanhdaoService;
