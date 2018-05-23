function quenmatkhauService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default quenmatkhauService;
