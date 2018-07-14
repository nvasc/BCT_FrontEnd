function oauthFactory($http, $q, localStorageService, oauthDataFactory, $location) {

  var resultFactory = {};
  
  var _login = function (loginData) {

    var data = '';
    data += 'UserName=' + loginData.UserName;
    data += '&Password=' + loginData.Password;
    var audience = oauthDataFactory.audience();
    var secret = oauthDataFactory.secret()
    if (audience !== '' && secret !== '') {
      data += '&Audience=' + audience;
      data += '&Secret=' + secret;
    }
    var deferred = $q.defer();
    $http.post(oauthDataFactory.urlLogin(), data, 
      { 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
      }).then(function (response) {
        var resultData = response.data;
        console.log(response);
        if (resultData.IsOk) {
          oauthDataFactory.setToken(resultData.ResultData.Token)
          oauthDataFactory.setRememberMe(loginData.RememberMe);
          deferred.resolve(resultData);
        }
        else {
          deferred.reject(resultData.Message);
        }        
      },function (err, status) {
        deferred.reject(err);
      });
    return deferred.promise;
  } 

  var _logOut = function () {
    var rtid = oauthDataFactory.getRefreshToken();
    if (rtid) {
      $http.delete(oauthDataFactory.urlLogin() + '?id=' + 
        oauthDataFactory.getRefreshToken()).then(function (rep) {
          oauthDataFactory.removeToken();
          oauthDataFactory.removeRememberMe();
          $location.path('/');
        }, function() {
          oauthDataFactory.removeToken();
          oauthDataFactory.removeRememberMe();
          $location.path('/');
        });
    } else {
      oauthDataFactory.removeToken();
      oauthDataFactory.removeRememberMe();
      $location.path('/');
    }       
  };

  var _refreshToken = function () {
    var deferred = $q.defer();
    if (oauthDataFactory.token) {
      var data = 'grant_type=refresh_token&refresh_token=' + 
      oauthDataFactory.refreshToken + '&client_id=' + oauthDataFactory.clientId;
      localStorageService.remove('authorizationData');

      $http.post(oauthDataFactory.urlMain + 'token', data, { 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
      }).success(function (response) {
        var resultData = response.data;          
        deferred.resolve(true);
      }).error(function (err, status) {
        _logOut();
        deferred.reject(err);
      });      
    }
    else {
      deferred.resolve(false);
    }
    return deferred.promise;
  };

  resultFactory.login = _login;
  resultFactory.refreshToken = _refreshToken;
  resultFactory.logOut = _logOut;
  return resultFactory;
}
/* @ngInject */
export default oauthFactory;