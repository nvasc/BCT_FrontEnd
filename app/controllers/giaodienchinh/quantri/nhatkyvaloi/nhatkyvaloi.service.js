function nhatkyvaloiService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default nhatkyvaloiService;
