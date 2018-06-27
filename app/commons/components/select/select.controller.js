import 'select2';
function selectController($q, $scope, $element, $attrs, $timeout,
  $http, oauthDataFactory) {
  var vm = this;  
  var url = oauthDataFactory.urlMain() + $scope.url;
  var _getCondition = function (seachText) {
    var filters = [];
    var filter = {
      Clauses: [],
      Op: 0
    };
    var clauses = [];
    var clause = {
      Operation: {},
      Op: 0
    };
    var operation = {
      Condition: 1,
      DataType: 0,
      Field: '',
      Value: ''
    };
    if (angular.isDefined(seachText) && seachText !== null && seachText !== '') {
      operation = {
        Condition: 0,
        DataType: 0,
        Field: 'Secret',
        Value: seachText
      };
      clause.Operation = angular.copy(operation);
      clauses.push(clause)
      filter.Clauses = angular.copy(clauses);
      filters.push(filter)
      return filters;
    }
    return [];
  }

  function initControl() {
    $timeout(function() {
      $('#' + $scope.ciId).select2({
        language: {
          noResults: function (params) {
            return 'Không có dữ liệu.';
          }
        },
        ajax:{
          url: $scope.url,
          data: function (params) {
            var queryParameters = {
              q: params.term
            }        
            return queryParameters;
          },
          processResults: function (data, params) {
            var results = [];
            var dataResult = data.Data;
            for (var i = 0; i < dataResult.length; i++) {
              results.push({id: dataResult[i].Audience, text: dataResult[i].Secret});
            }
            return {
              results: results
            };
          },
          transport: function (params, success, failure) {       
            console.log(params.data);
            var filter = {};
            filter.Skip = 0;
            filter.Take = 50;
            filter.OrderBys = [];
            filter.Filters = _getCondition(params.data.q);
            var request = $http.post(url, filter).then(function (resp) {              
              success(resp.data);
            });
            // var $request = $.ajax(params);
        
            // $request.then(success);
            // $request.fail(failure);
        
            return request;
          }
        }
      });
    });    
  }
  initControl();
}

/* @ngInject */
export default selectController;
