

function page401Controller ($scope,page401Service, loginInfoFactory) {
  const vm = this;
  vm.headerText = 'Rất tiếc! Bạn không đủ quyền để truy cập.';
  vm.bodyText = 'Xin vui lòng trở lại';
}

/* @ngInject */
export default page401Controller;