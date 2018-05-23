function nhapkhaubaocaoService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default nhapkhaubaocaoService;
