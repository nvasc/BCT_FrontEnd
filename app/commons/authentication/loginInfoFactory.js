function loginInfoFactory(oauthDataFactory, $state) {
  var dataFactory = {};

  var _getAppVersion = function () {
    var obj = oauthDataFactory.getTokenDetail()
    if (obj) {
      return obj.av;
    }
    return '';
  };   
  dataFactory.getAppVersion = _getAppVersion;

  var _getLoginName = function () {
    var obj = oauthDataFactory.getTokenDetail()
    if (obj) {
      return obj.ninf;
    }
    return '';
  };   
  
  dataFactory.getLoginName = _getLoginName;

  var _getUserName = function () {
    var obj = oauthDataFactory.getTokenDetail()
    if (obj) {
      return obj.sub;
    }
    return '';
  };   
  
  dataFactory.getUserName = _getUserName;

  var _getTenantName = function () {
    var obj = oauthDataFactory.getTokenDetail()
    if (obj) {
      return obj.tninf;
    }
    return '';
  };   
  dataFactory.getTenantName = _getTenantName;

  dataFactory.getUserName = _getUserName;

  var _checkLogin = function () {
    var obj = oauthDataFactory.getTokenDetail();  
    if (!obj) {
      if ($state.current.name.indexOf('.') !== -1) {
        $state.go('dangnhap');
      }           
    }
    else {
      if ('dangnhap' === $state.current.name) {
        $state.go('giaodienchinh.kiemsoatchung');
      }
    }
  };   
  dataFactory.checkLogin = _checkLogin; 

  return dataFactory;
}

/* @ngInject */
export default loginInfoFactory;