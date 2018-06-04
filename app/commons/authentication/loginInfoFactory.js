function loginInfoFactory(oauthDataFactory) {
  var dataFactory = {};

  var _getAppVersion = function () {
    var obj = oauthDataFactory.getTokenDetail()
    if (obj) {
      return obj.av;
    }
  };   
  dataFactory.getAppVersion = _getAppVersion;

  var _getLoginName = function () {
    var obj = oauthDataFactory.getTokenDetail()
    if (obj) {
      return obj.ninf;
    }
  };   
  
  dataFactory.getLoginName = _getLoginName;

  var _getUserName = function () {
    var obj = oauthDataFactory.getTokenDetail()
    if (obj) {
      return obj.sub;
    }
  };   
  
  dataFactory.getUserName = _getUserName;

  var _getTenantName = function () {
    var obj = oauthDataFactory.getTokenDetail()
    if (obj) {
      return obj.tninf;
    }
  };   
  dataFactory.getTenantName = _getTenantName;

  dataFactory.getUserName = _getUserName; 

  return dataFactory;
}

/* @ngInject */
export default loginInfoFactory;