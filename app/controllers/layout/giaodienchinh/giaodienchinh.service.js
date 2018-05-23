function giaodienchinhService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default giaodienchinhService;
