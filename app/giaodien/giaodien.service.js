function giaodienService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default giaodienService;
