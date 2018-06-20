function loaihinhdaotaoService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default loaihinhdaotaoService;
