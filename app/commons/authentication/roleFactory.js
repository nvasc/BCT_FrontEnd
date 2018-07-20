function roleFactory(oauthDataFactory) {

  var roles = {}
  var dataFactory = {
    
  };
  var _loadRoles = function () {
    roles = {};
    var tokenDetail = oauthDataFactory.getTokenDetail();
    if (tokenDetail && tokenDetail.rl && tokenDetail.rl.length > 0) {
      var rl = tokenDetail.rl;
      for (var i = 0; i < rl.length; i++) {
        var splits = rl[i].split('_');
        if (splits.length >= 2) {
          roles[splits[0]] = { 
            create : splits[1].indexOf('c') > -1,
            read : splits[1].indexOf('r') > -1, 
            update : splits[1].indexOf('u') > -1, 
            delete : splits[1].indexOf('d') > -1,  
          };
        }
        else if (splits.length === 1) {
          roles[splits[0]] = {login : true};
        }       
      }
    }
  }
  var _getRoles = function () {
    _loadRoles();
    return roles;
  }

  dataFactory.getRoles = _getRoles; 

  var _getRoleFor = function (docName) {
    _loadRoles();    
    return roles[docName];
  }
  
  dataFactory.getRoleFor = _getRoleFor; 

  var _isAllAccess = function () {
    var tokenObj =  oauthDataFactory.getTokenDetail();
    if (tokenObj && tokenObj.sat.length === 2 && tokenObj.sat[0] === '1') {
      return true;
    }    
    return false;
  };
  dataFactory.isAllAccess = _isAllAccess;

  var _isSystem = function () {
    var tokenObj =  oauthDataFactory.getTokenDetail();
    if (tokenObj && tokenObj.sat.length === 2 && tokenObj.sat[1] === '1') {
      return true;
    }    
    return false;
  };
  dataFactory.isSystem = _isSystem;
  
  return dataFactory;
}

/* @ngInject */
export default roleFactory;
