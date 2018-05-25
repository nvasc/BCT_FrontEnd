function hoptacquocteService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default hoptacquocteService;
