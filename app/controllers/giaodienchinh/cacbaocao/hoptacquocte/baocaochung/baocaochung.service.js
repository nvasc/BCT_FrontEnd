function baocaochungService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default baocaochungService;
