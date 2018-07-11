
export default function colDataTypeFilter () {
  var hash = {
    0: 'None',
    1: 'String',
    2: 'Text',
    3: 'Interger',
    4: 'Double',
    5: 'Date',
    6: 'DateTime'
  };
  return function(input) {
    if (angular.isUndefined(input)) {
      return '';
    } else {
      
      return hash[input];
    }
  };
}