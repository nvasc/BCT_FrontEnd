var jwtDecode = require('jwt-decode');
function oauthDataFactory(localStorageService, $rootScope, $location) {
  var dataFactory = {};

  var _urlMain = function () {
    if ($('#connect-to-server').length) {
      return $rootScope.base64.decode($('#connect-to-server').val())
    }    
    return '';
  };
  dataFactory.urlMain = _urlMain;

  var _audience = function () {
    if ($('#audience').length) {
      return $('#audience').val()
    }    
    return '';
  };
  dataFactory.audience = _audience;

  var _secret = function () {
    if ($('#secret').length) {
      return $('#secret').val()
    }    
    return '';
  };
  dataFactory.secret = _secret;

  var _urlLogin = function () {
    if (_audience() !== '' && _secret() !== '') {
      return $rootScope.base64.decode($('#connect-to-server').val()) + 'token'
    }
    var urlSelf = $location.protocol() + '://' + $location.host();
    if ($location.port() !== 80) {
      urlSelf += ':' + $location.port()
    }      
    urlSelf += '/home/login'
    return urlSelf;
  };
  dataFactory.urlLogin = _urlLogin;

  var _ascToken = 'asc-token';
  var _setToken =  function (token) {
    localStorageService.set(_ascToken, token)
  }; 
  dataFactory.setToken = _setToken;

  var _getToken = function () {
    return localStorageService.get(_ascToken);
  }; 

  dataFactory.getToken = _getToken;

  var _getRefreshToken = function () {
    var objToken =  _getTokenDetail();
    if (objToken) {
      return objToken.rtid
    }
    return null;
  }; 
  
  dataFactory.getRefreshToken = _getRefreshToken;

  var _removeToken = function () {
    return localStorageService.remove(_ascToken);
  }; 
  dataFactory.removeToken = _removeToken;

  var _checkValidToken = function () {
    var obj = _getTokenDetail();
    
    if  (obj) {
      var expDate = new Date(obj.exp * 1000);      
      var currentDate = new Date();
      return expDate > currentDate
    }
  }; 

  dataFactory.checkValidToken = _checkValidToken;  

  var _getTokenDetail = function () {
    var tokenObj = _getToken();
    if (tokenObj) {
      return jwtDecode(_getToken());
    }    
    return null;
  };
  dataFactory.getTokenDetail = _getTokenDetail;

  var _refreshToken = ''; //todo: implement get value.
  dataFactory.refreshToken = _refreshToken;   

  var _ascRemember = 'asc-remember';
  var _setRememberMe =  function (isRemember) {
    localStorageService.set(_ascRemember, isRemember)
  }; 
  dataFactory.setRememberMe = _setRememberMe;

  var _getRememberMe = function () {
    return localStorageService.get(_ascRemember);
  }; 
  dataFactory.getRememberMe = _getRememberMe;

  var _removeRememberMe = function () {
    return localStorageService.remove(_ascRemember);
  };   
  dataFactory.removeRememberMe = _removeRememberMe;

  var _isAllAccess = function () {
    var tokenObj = _getToken();
    if (tokenObj && tokenObj.sat.length === 2 && tokenObj.sat[0] === '1') {
      return true;
    }    
    return false;
  };
  dataFactory.isAllAccess = _isAllAccess;

  var _isSystem = function () {
    var tokenObj = _getToken();
    if (tokenObj && tokenObj.sat.length === 2 && tokenObj.sat[1] === '1') {
      return true;
    }    
    return false;
  };
  dataFactory.isSystem = _isSystem;

  return dataFactory;
}

/* @ngInject */
export default oauthDataFactory;