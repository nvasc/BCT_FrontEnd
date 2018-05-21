function loginService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default loginService;
