

function menuController ($scope, roleFactory, $timeout) {
  const vm = this;
  vm.role = {}
  var _getQuanLy = function () {
    return (vm.role.bmc && vm.role.bmc.read) || 
      (vm.role.lhdt && vm.role.lhdt.read) ||
      (vm.role.ndt && vm.role.ndt.read) || 
      (vm.role.tk && vm.role.tk.read) || 
      (vm.role.nqud && vm.role.nqud.read) || 
      (vm.role.pqnd && vm.role.pqnd.read) || 
      (vm.role.tttr && vm.role.tttr.read)
  }
  var _getQuanTri = function () {
    return (vm.role.clt && vm.role.clt.read) || 
      (vm.role.dcm && vm.role.dcm.read) ||
      (vm.role.tt && vm.role.tt.read) || 
      (vm.role.dt && vm.role.dt.read) || 
      (vm.role.tg && vm.role.tg.read)
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