function popupFactory($ngConfirm, $rootScope) {
  var factory = {};
  var _options = {};

  var _setOptions = function (options) {
    _options = options;
  }
  factory.setOptions = _setOptions;

  var _create = function (createAction, closeCallback) {
    var popup = null; 
    
    _options.buttons = {
      Create: {
        text: _options.rss.CreateButton,
        btnClass: _options.rss.CreateButtonClass,
        action: function (scope, button) {
          if (createAction) {
            createAction().then(function (resp) {
              if (resp) {
                popup.close();
              }
            });
          }
          return false;
        }
      },
      close: {
        text: _options.rss.CancelButton,
        btnClass: _options.rss.CancelButtonClass,
        action: function (scope, button) {
          if (closeCallback) {
            closeCallback();
          }
        }
      }
    };    
    _options.onClose = function () {
      $rootScope.IsShowPopup = false;
    }
    _options.onOpen = function () {
      $rootScope.IsShowPopup = true;
    }
    popup = $ngConfirm(_options);
  }  
  factory.create = _create;

  var _update = function (updateAction, closeCallback, role) {
    console.log(role);
    var popup = null;
    if (role && role.update === true) {
      _options.buttons = {
        Update: {
          text: _options.rss.UpdateButton,
          btnClass: _options.rss.UpdateButtonClass,
          action: function (scope, button) {
            if (updateAction) {
              updateAction().then(function (resp) {
                if (resp) {
                  popup.close();
                }
              });
            }
            return false;
          }
        },        
        close: {
          text: _options.rss.CancelButton,
          btnClass: _options.rss.CancelButtonClass,
          action: function (scope, button) {
            if (closeCallback) {
              closeCallback();
            }
          }
        }
      };
    }
    else {
      _options.buttons = {        
        close: {
          text: _options.rss.CloseButton,
          btnClass: _options.rss.CancelButtonClass,
          action: function (scope, button) {
            if (closeCallback) {
              closeCallback();
            }
          }
        }
      };
    }
    
    _options.onClose = function () {
      $rootScope.IsShowPopup = false;
    }
    _options.onOpen = function () {
      $rootScope.IsShowPopup = true;
    }
    popup = $ngConfirm(_options);
  }  
  factory.update = _update;

  var _delete = function (deleteAction, closeCallback) {
    var popup = null;
    _options.buttons = {
      Delete: {
        text: _options.rss.DeleteButton,
        btnClass: _options.rss.DeleteButtonClass,
        action: function (scope, button) {
          if (deleteAction) {
            deleteAction().then(function (resp) {
              if (resp) {
                popup.close();
              }
            });
          }
          return false;
        }
      },
      close: {
        text: _options.rss.CancelButton,
        btnClass: _options.rss.CancelButtonClass,
        action: function (scope, button) {
          if (closeCallback) {
            closeCallback();
          }
        }
      }
    };
    _options.onClose = function () {
      $rootScope.IsShowPopup = false;
    }
    _options.onOpen = function () {
      $rootScope.IsShowPopup = true;
    }
    popup = $ngConfirm(_options);
  }  
  factory.delete = _delete;

  var _custom = function () {
    var popup = null; 
    popup = $ngConfirm(_options);
    return popup;    
  }
  factory.custom = _custom;

  return factory;
}

/* @ngInject */
export default popupFactory;
