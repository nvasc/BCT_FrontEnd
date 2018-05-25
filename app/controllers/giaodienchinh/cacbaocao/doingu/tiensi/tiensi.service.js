function tiensiService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default tiensiService;
