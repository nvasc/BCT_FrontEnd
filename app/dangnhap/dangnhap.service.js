function dangnhapService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default dangnhapService;
