function giangvientheokhoaService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default giangvientheokhoaService;
