function oauthDataFactory(localStorageService) {
  var dataFactory = {};
  var _clientId = ''; //todo: implement get value.
  dataFactory.clientId = _clientId;
  var _urlMain = ''; //todo: implement get value.
  dataFactory.urlMain = _urlMain;
  var _token = ''; //todo: implement get value.
  dataFactory.token = _token;
  var _refreshToken = ''; //todo: implement get value.
  dataFactory.refreshToken = _refreshToken;  

  var _remove = function () {    
  }
  dataFactory.remove = _remove;
  return dataFactory;
}

/* @ngInject */
export default oauthDataFactory;