function daihocService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default daihocService;
