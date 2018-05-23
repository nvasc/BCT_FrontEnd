function thongbaoService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default thongbaoService;
