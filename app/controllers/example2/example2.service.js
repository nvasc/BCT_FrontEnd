
class Example2Service {
  constructor($state) {
    this.$state = $state;
    this.abc = '';
  }
  title() {
    return this.$state.current.name
  }
  
  static Example2ServiceInstance($state) {
    return new Example2Service($state);
  }
}

Example2Service.Example2ServiceInstance.$inject = [ '$state' ];

export default Example2Service.Example2ServiceInstance;
