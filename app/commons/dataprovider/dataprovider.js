function dataProvider($resource, oauthDataFactory, $rootScope) {    
  var service = {};

  var _provider = function (model, key) {
    var modelUrl = '';
    if (model) {
      modelUrl = oauthDataFactory.urlMain() +  'api/' + model;
    }
    else { 
      return null;
    }
    if (key) {
      return $resource('', {},
        {
          'get': { method: 'GET', headers: { 'nk': $rootScope.base64.encode(key)}, 
            params: { id: '@id' }, url: modelUrl + '?id=:id'},
          'create': { method: 'POST', headers: { 'nk': $rootScope.base64.encode(key)}, 
            params: { }, url: modelUrl},
          'update': { method: 'PUT', headers: { 'nk': $rootScope.base64.encode(key)}, 
            params: { id: '@id' }, url: modelUrl + '?id=:id'},
          'delete': { method: 'DELETE', headers: { 'nk': $rootScope.base64.encode(key)}, 
            params: { id: '@id' }, url: modelUrl + '?id=:id'}
        });
    }
    else {
      return $resource('', {},
        {
          'get': { method: 'GET', params: { id: '@id' }, url: modelUrl + '?id=:id'},
          'create': { method: 'POST', params: { }, url: modelUrl},
          'update': { method: 'PUT', params: { id: '@id' }, url: modelUrl + '?id=:id'},
          'delete': { method: 'DELETE', params: { id: '@id' }, url: modelUrl + '?id=:id'}
        });
    }
    
  }
  service.provider = _provider;
  
  return service;
}
  
/* @ngInject */
export default dataProvider;