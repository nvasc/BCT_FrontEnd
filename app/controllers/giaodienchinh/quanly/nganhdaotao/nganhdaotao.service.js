function nganhdaotaoService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default nganhdaotaoService;
