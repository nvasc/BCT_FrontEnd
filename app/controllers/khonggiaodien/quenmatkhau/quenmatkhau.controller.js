function quenmatkhauController ($scope,quenmatkhauService, loginInfoFactory) {
  const vm = this;
  loginInfoFactory.checkLogin();
}

/* @ngInject */
export default quenmatkhauController;