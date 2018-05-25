function oauthInterceptorFactory($q, $injector, $location, $rootScope, oauthDataFactory) {

  var resultFactory = {};

  var _request = function (config) {
    config.headers = config.headers || {};
    var authData = oauthDataFactory.token;
    if (authData) {
      if (oauthDataFactory.compareVersion()) {
        return config;
      }
      config.headers.Authorization = 'Bearer ' + authData;
    }
    return config;
  }
  /*eslint-disable */
  var _responseError = function (rejection) {
    //var state = $injector.get('$state');
    var error = '';
    var i = 0;
    if (rejection.status === 401) {
      if (angular.isDefined(rejection.data) && angular.isDefined(rejection.data.Message)) {
        $rootScope.toastr.error(rejection.data.Message, { allowHtml: true });
      }
    }
    else if (rejection.status === 400) {
      if (angular.isDefined(rejection.data) && rejection.data.error === 'invalid_grant') {
        $rootScope.toastr.error(rejection.data.error_description);
      }
      if (angular.isDefined(rejection.data) && angular.isDefined(rejection.data.Message)) {
        $rootScope.toastr.error(rejection.data.Message, { allowHtml: true });
      }
      if (rejection.statusText === 'Critical Exception') {
        $rootScope.toastr.error(rejection.data);
      }
      if (rejection.data && rejection.data.IsValid === false) {
        error = '';
        i = 0;
        for (i = 0; i < rejection.data.Errors.length; i++) {
          error += '<li>' + rejection.data.Errors[i] + '</li>';
        }
        $rootScope.toastr.error('<ol>' + error + '</ol>', 'Dữ liệu nhập không hợp lệ!', { allowHtml: true })
      }
      if (rejection.data && rejection.data.IsError === true) {
        error = '';
        i = 0;
        for (i = 0; i < rejection.data.Errors.length; i++) {
          error += '<li>' + rejection.data.Errors[i] + '</li>';
        }
        $rootScope.toastr.error('<ul>' + error + '</ul>', { allowHtml: true });
      }
    } else if (rejection.status === 500) {
      if ($rootScope.modalObjects && $rootScope.modalObjects.length > 0) {
        for (var j = 0; j < $rootScope.modalObjects.length; j++) {
          if ($rootScope.modalObjects[j]) {
            $rootScope.modalObjects[j].close();
          }
        }
        $rootScope.modalObjects = [];
      }
    }
    return $q.reject(rejection);
  }
  

  var _response = function (response) {
    var toastr = $injector.get('toastr');
    if (response.status === 200) {
      if (angular.isDefined(response.data)) {               
        var msg = $injector.get('msg');
        switch (response.data.ActionState) {
          case 1:
            $rootScope.toastr.success(msg.createSuccess, { allowHtml: true });
            break;
          case 2:
            $rootScope.toastr.success(msg.updateSuccess, { allowHtml: true });
            break;
          case 3:
            $rootScope.toastr.success(msg.deleteSuccess, { allowHtml: true });
            break;
          case 4:
          case 5:
            var msg = '';
            for (var i = 0; i < response.data.Messages.length; i++) {
              msg += '<li>' + response.data.Messages[i] + '</li>';
            }
            if (response.data.ActionState === 4) {
              $rootScope.toastr.success('<ul>' + msg + '</ul>', { allowHtml: true });
            } else {
              $rootScope.toastr.error('<ul>' + msg + '</ul>', { allowHtml: true });
            }
            break;
        }
      }
    }
    return response;
  };
  /*eslint-enable */
  resultFactory.request = _request;
  resultFactory.response = _response;
  resultFactory.responseError = _responseError;
  return resultFactory;
}
/* @ngInject */
export default oauthInterceptorFactory;
