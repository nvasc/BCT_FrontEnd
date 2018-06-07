function testService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default testService;
