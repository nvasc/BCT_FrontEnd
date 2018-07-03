function downloadFactory($http, oauthDataFactory) {
  var service = {};

  service.download = function (gid) {
    var urlDownload = oauthDataFactory.urlMain() + 'api/download?id=' + gid;
    $http({
      method: 'GET',
      url: urlDownload,
      responseType: 'arraybuffer'
    })
      .then(function (data) {
        console.log(data)
        var headers = data.headers();
        
        
        var contentType = headers['content-type'];        
        var fileName = data.headers('Content-Disposition').replace('attachment; filename=', '');
        /*eslint-disable */
        
        var linkElement = document.createElement('a');
         /*eslint-enable */
        try {
          var blob = new Blob([ data ], {
            type: contentType
          });
          /*eslint-disable */
          var url = window.URL.createObjectURL(blob);
          /*eslint-enable */
          linkElement.setAttribute('href', url);
          linkElement.setAttribute('download', fileName);

          var clickEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': false
          });
          linkElement.dispatchEvent(clickEvent);
        } catch (ex) {
          console.error(ex);
        }
      }, function errorCallback(response) {
        console.error(response);
      });
  }
  return service;
}

/* @ngInject */
export default downloadFactory;
