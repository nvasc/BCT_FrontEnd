function thongtindangnhapService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default thongtindangnhapService;
