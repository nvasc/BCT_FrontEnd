function nghiencuukhoahocService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default nghiencuukhoahocService;
