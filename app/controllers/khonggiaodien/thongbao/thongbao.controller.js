

function thongbaoController ($scope,thongbaoService, loginInfoFactory) {
  const vm = this;
  loginInfoFactory.checkLogin();
}

/* @ngInject */
export default thongbaoController;