function oauthInterceptorFactory($q, $injector, $location, $rootScope, oauthDataFactory, $state) {

  var resultFactory = {};

  var _request = function (config) {
    config.headers = config.headers || {};
    var authData = oauthDataFactory.getToken();
   
    if (authData) {
      if (!oauthDataFactory.checkValidToken()) {
        return config;
      }      
      config.headers.Authorization = 'Bearer ' + authData;
    }
    return config;
  }
  /*eslint-disable */
  var _responseError = function (rejection) {
    var error = '';
    var i = 0;
    console.log(rejection);
    if (rejection.status === 401) {
      if (angular.isDefined(rejection.data)) {               
        if (!oauthDataFactory.checkValidToken()) {
          oauthDataFactory.removeToken();          
          $state.go('dangnhap');
        }
        else {
          if ($rootScope.IsShowPopup === true) {
            $rootScope.toastr.error(rejection.data.Message, { allowHtml: true }); 
          } else {
            $state.go('page401');
          }          
        }        
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
    } else if (rejection.status === 403) {
      
    } else if (rejection.status === 500) {
      
    }
    return $q.reject(rejection);
  }
  

  var _response = function (response) {
    if (response.status === 200) {
      if (angular.isDefined(response.data)) {               
        if (angular.isObject(response.data)) {
          if (angular.isDefined(response.data.IsOk)) {
            if (response.data.IsOk === true) {              
              $rootScope.toastr.success(response.data.Message);
            }
            else {
              if (response.data.Errors && response.data.Errors.length > 0) {
                var html = 
                '<strong style="margin-bottom: 10px">' + response.data.Message + '</strong>';
                html+= '<ol>'
                for (var i = 0; i< response.data.Errors.length; i++) {
                  html+= '<li>' + response.data.Errors[i] + '</li>'
                }
                html+= '</ol>'
                $rootScope.toastr.error(html, null, {timeOut: 15000});
              }
              else { 
                $rootScope.toastr.error(response.data.Message, null, { timeOut: 15000});
              }    
              return $q.reject(response);          
            }            
          }              
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
