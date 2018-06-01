function dangnhapService($state, oauthFactory) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default dangnhapService;
