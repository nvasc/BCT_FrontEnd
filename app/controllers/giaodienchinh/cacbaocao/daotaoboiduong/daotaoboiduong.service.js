function daotaoboiduongService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default daotaoboiduongService;
