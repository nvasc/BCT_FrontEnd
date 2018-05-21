function layoutService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default layoutService;
