function taikhoanService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default taikhoanService;
