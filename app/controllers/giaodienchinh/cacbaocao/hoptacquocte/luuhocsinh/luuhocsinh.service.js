function luuhocsinhService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default luuhocsinhService;
