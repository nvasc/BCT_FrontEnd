function danhsachtruongService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default danhsachtruongService;
