function sinhvientotnghiepService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default sinhvientotnghiepService;
