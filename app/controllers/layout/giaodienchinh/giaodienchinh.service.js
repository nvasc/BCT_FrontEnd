function giaodienchinhService(loginInfoFactory) {
  var service = {}   
  service.getTenantName = function () {
    return loginInfoFactory.getTenantName();
  };

  service.getUserName = function () {
    return loginInfoFactory.getUserName();
  };
  service.getLoginName = function () {
    return loginInfoFactory.getLoginName();
  };
  service.getAppVersion = function () {
    return loginInfoFactory.getAppVersion();
  };
  return service;

}
/* @ngInject */
export default giaodienchinhService;
