

function menuController ($scope, roleFactory, $timeout) {
  const vm = this;
  vm.role = {}
  var _getQuanLy = function() { 
    var result = false;   
    var groupQuanly = ['bmc', 'lhdt', 'ndt', 'tk', 'nqud', 'pqnd', 'tttr', 'tt', 'dt', 'tg']
    for (var i = 0; i < groupQuanly.length; i++) {
      result = result || (vm.role[groupQuanly[i]] && vm.role[groupQuanly[i]].read);
    }
    return result;      
  }

  var _getQuanTri = function () {
    var result = false;   
    var groupQuanTri = ['clt', 'dcm', 'srts', 'ttdn']
    for (var i = 0; i < groupQuanTri.length; i++) {
      result = result || (vm.role[groupQuanTri[i]] && vm.role[groupQuanTri[i]].read);
    }
    return result;
  }

  function init() {    
    $timeout(function () {
      vm.role = roleFactory.getRoles()
      vm.role.quanly = _getQuanLy();
      vm.role.quantri = _getQuanTri();
      $scope.$apply();
    })
    
  }

  init();  
}

/* @ngInject */
export default menuController;