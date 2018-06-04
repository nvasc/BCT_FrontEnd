function dataProvider($resource, oauthDataFactory) {    
  var service = {};

  var _modelUrl = '';

  var _getModel = function() {
    return _modelUrl;
  }
  service.getModel = _getModel;

  var _setModel = function(model) {
    _modelUrl = oauthDataFactory.urlMain() + 'api/' + model;
  }
  service.setModel = _setModel;

  var _provider = function (model, func) {
    if (model) {
      _modelUrl = oauthDataFactory.urlMain() +  'api/' + model;
    }
    var url = func ? _modelUrl + func : _modelUrl + '?id=:id';
    return $resource('', {},
      {
        'get': { method: 'GET', params: { id: '@id' }, url: url},
        'create': { method: 'POST', params: { id: '@id' }, url: url},
        'update': { method: 'PUT', params: { id: '@id' }, url: url },
        'delete': { method: 'DELETE', params: { id: '@id' }, url: url }
      });
  }
  service.provider = _provider;
  
  return service;
}
  
/* @ngInject */
export default dataProvider;