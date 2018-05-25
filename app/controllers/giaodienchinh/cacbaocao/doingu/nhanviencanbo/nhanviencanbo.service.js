function nhanviencanboService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default nhanviencanboService;
