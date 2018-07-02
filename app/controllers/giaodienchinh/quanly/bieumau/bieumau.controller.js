import 'select2';
import 'select2/dist/css/select2.css';
function bieumauController ($scope, bieumauService) {
  const vm = this;
  vm.title = bieumauService.title();
  vm.CountryList = [
    { value: '0', text: 'Chọn quốc gia' },
    { value: '2', text: 'Việt Nam' },
  ];
  vm.CountrySelected = { value: '0' };
  $scope.$watch('bieumau.CountrySelected', function (nval, oval) { 
    console.log(nval, oval)
  });
  vm.selectData =  ['1', '2'];
  $scope.$watch('bieumau.selectData', function (nval, oval) { 
    if (!angular.equals(nval, oval)) {
      console.log(nval, oval)
    }    
  });
  vm.defaultFilter = {
    Abc: '123'
  }
}

/* @ngInject */
export default bieumauController;