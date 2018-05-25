function tuyensinhdaoService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default tuyensinhdaoService;
