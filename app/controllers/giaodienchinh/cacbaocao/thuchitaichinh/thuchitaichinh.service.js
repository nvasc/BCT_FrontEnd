function thuchitaichinhService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default thuchitaichinhService;
