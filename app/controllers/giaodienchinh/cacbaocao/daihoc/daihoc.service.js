function baocaolanhdaoService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default baocaolanhdaoService;
