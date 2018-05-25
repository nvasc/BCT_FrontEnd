function cosovatchatService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default cosovatchatService;
