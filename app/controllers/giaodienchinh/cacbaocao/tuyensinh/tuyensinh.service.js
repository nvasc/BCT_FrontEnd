function tuyensinhService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default tuyensinhService;
