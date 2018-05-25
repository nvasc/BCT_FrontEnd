function bieumauService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default bieumauService;
