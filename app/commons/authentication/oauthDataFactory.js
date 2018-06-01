function oauthDataFactory(localStorageService, $rootScope) {
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

  var _token = ''; //todo: implement get value.
  dataFactory.token = _token;

  var _refreshToken = ''; //todo: implement get value.
  dataFactory.refreshToken = _refreshToken;  

  var _remove = function () {    
  }
  dataFactory.remove = _remove;

  var _loadSystem

  return dataFactory;
}

/* @ngInject */
export default oauthDataFactory;