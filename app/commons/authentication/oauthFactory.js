function oauthFactory($http, $q, localStorageService, oauthDataFactory, $location) {

  var resultFactory = {};
  
  var _login = function (loginData) {

    var data = 'grant_type=password';
    data += '&username=' + loginData.userName;
    data += '&password=' + loginData.password;
    data += '&client_id=' + oauthDataFactory.clientId;

    var deferred = $q.defer();
    $http.post(oauthDataFactory.urlMain + 'token', data, 
      { 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
      }).then(function (response) {
        var resultData = response.data;
        deferred.resolve(true);
      },function (err, status) {
        deferred.reject(err);
      });
    return deferred.promise;
  } 

  var _logOut = function () {
    if (oauthDataFactory.token) {
      $http.delete(oauthDataFactory.urlMain + 'api/Authentication?id=' + 
        oauthDataFactory.token).then(function (rep) {
          oauthDataFactory.remove();
          $location.path('/');
        }, function() {
          oauthDataFactory.remove();
          $location.path('/');
        });
    } else {
      oauthDataFactory.remove();
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