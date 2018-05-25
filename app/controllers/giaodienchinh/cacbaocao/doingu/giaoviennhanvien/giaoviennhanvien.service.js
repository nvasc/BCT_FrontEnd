function giaoviennhanvienService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default giaoviennhanvienService;
