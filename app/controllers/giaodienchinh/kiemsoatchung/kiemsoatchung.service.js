function kiemsoatchungService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default kiemsoatchungService;
