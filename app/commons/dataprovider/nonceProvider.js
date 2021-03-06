function nonceProvider($q, $http, oauthDataFactory) {  

  var service = {};
  var _urlNonce = oauthDataFactory.urlMain() + 'nonce'
  service.urlNonce = function () {
    return _urlNonce;
  }
  
  var _get = function () {    
    var deferred = $q.defer();
    $http.get(_urlNonce).then(function (response) {
      deferred.resolve(response.data);
    },function (err, status) {
      deferred.reject(err);
    })
    return deferred.promise;
  }
  service.get  = _get;

  var _getForVAFT = function () {    
    var deferred = $q.defer();
    $http.get(_urlNonce + '/vaft').then(function (response) {
      deferred.resolve(response.data);
    },function (err, status) {
      deferred.reject(err);
    })

    return deferred.promise;
  }
  service.getForVAFT = _getForVAFT;
  
  return service;
}

/* @ngInject */
export default nonceProvider;