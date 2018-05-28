function giangviennhanvienService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default giangviennhanvienService;
