function httpProvider($q, $http, nonceProvider, oauthDataFactory, $rootScope) {  

  var service = {};
  var _get = function (url, isNonce) {
    url = oauthDataFactory.urlMain() + url;
    var deferred = $q.defer();
    function common(key) {
      var config = {};
      if (key) {
        config = {
          headers: {
            'nk': $rootScope.base64.encode(key)
          }
        } 
      }
      $http.get(url, config).then(function (response) {
        deferred.resolve(response.data);
      },function (err, status) {
        deferred.reject(err);
      })      
    }
    if (isNonce === true) {
      nonceProvider.get().then(function (key) {
        common(key);
      });
    }
    else {
      common();
    } 
    return deferred.promise;
  }
  service.get  = _get;

  var _post = function (url, data, isNonce) {
    url = oauthDataFactory.urlMain() + url;
    var deferred = $q.defer();
    function common(key) {
      var config = {};
      if (key) {
        config = {
          headers: {
            'nk': $rootScope.base64.encode(key)
          }
        } 
      }
      $http.post(url, data, config).then(function (response) {
        deferred.resolve(response.data);
      },function (err, status) {
        deferred.reject(err);
      })      
    }
    if (isNonce === true) {
      nonceProvider.get().then(function (key) {
        common(key);
      });
    }
    else {
      common();
    } 
    return deferred.promise;
  }
  service.post  = _post;

  var _put = function (url, data, isNonce) {
    url = oauthDataFactory.urlMain() + url;
    var deferred = $q.defer();
    function common(key) {
      var config = {};
      if (key) {
        config = {
          headers: {
            'nk': $rootScope.base64.encode(key)
          }
        } 
      }
      $http.put(url, data, config).then(function (response) {
        deferred.resolve(response.data);
      },function (err, status) {
        deferred.reject(err);
      })      
    }
    if (isNonce === true) {
      nonceProvider.get().then(function (key) {
        common(key);
      });
    }
    else {
      common();
    } 
    return deferred.promise;
  }
  service.put  = _put;

  var _delete = function (url, data, isNonce) {
    url = oauthDataFactory.urlMain() + url;
    var deferred = $q.defer();
    function common(key) {
      var config = {};
      if (key) {
        config = {
          headers: {
            'nk': $rootScope.base64.encode(key)
          }
        } 
      }
      $http.delete(url, config).then(function (response) {
        deferred.resolve(response.data);
      },function (err, status) {
        deferred.reject(err);
      })      
    }
    if (isNonce === true) {
      nonceProvider.get().then(function (key) {
        common(key);
      });
    }
    else {
      common();
    } 
    return deferred.promise;
  }
  service.delete  = _delete;
  return service;
}

/* @ngInject */
export default httpProvider;