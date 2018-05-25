function apiService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default apiService;
