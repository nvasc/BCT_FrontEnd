import 'select2';
function selectController($q, $scope, $element, $attrs, $timeout,
  $http, oauthDataFactory) {
  var vm = this;  
  var msg  = {
    SelectTextStart: '--- Chọn ---',
  }
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
  var _control = $('#' + $scope.ciId);

  $scope.$watch('select.dataSelected', function (nval, oval) {
    console.log(nval, oval);
  });

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
              results.push({
                id: dataResult[i].Id, text: dataResult[i].Text, level: dataResult[i].Level
              });
            }
            return {
              results: results
            };
          },
          transport: function (params, success, failure) {            
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
  function formatResult(item) {
    var $result = $('<span style="padding-left:' + (10 * parseInt(item.level)) + 
    'px;">' + item.text + '</span>');
    return $result;
  };

  function initControlOneLoad() {
    $timeout(function() {
      $http.get(url).then(function (rep) {
        var results = [ {id: 0, text: msg.SelectTextStart, level: '1'} ];
        var dataResult = rep.data.Data;
        for (var i = 0; i < dataResult.length; i++) {
          results.push({
            id: dataResult[i].Id, text: dataResult[i].Text, level: dataResult[i].Level
          });
        }
        _control.select2({
          language: {
            noResults: function (params) {
              return 'Không có dữ liệu.';
            }
          },          
          templateResult: formatResult,
          data:   results
        }).on('change', function (e) {          
          if (angular.isUndefined($scope.ciValueType) || $scope.ciValueType === 'key') {
            if ($(this).select2('data').length > 1) {
              var vals = [];
              for (var j = 0; j < $(this).select2('data').length; j++) {
                vals.push($(this).select2('data')[j].id)
              }
              $scope.ngModel = vals;
            }
            else {
              $scope.ngModel = $(this).select2('data')[0].id;
            }            
          }
          else {
            if ($(this).select2('data').length > 1) {
              var vals = [];
              for (var j = 0; j < $(this).select2('data').length; j++) {
                vals.push($(this).select2('data')[j])
              }
              $scope.ngModel = vals;
            }
            else {
              $scope.ngModel = $(this).select2('data')[0];
            }
          }
          $timeout(function () {
            $scope.$apply();
          })          
        });   
        _control.select2('val', [ $scope.ngModel + '' ])     
      });      
    });  
  }

  if ($scope.ciOneLoad === 'true') {
    initControlOneLoad();
  }
  else {
    initControl();
  }
}

/* @ngInject */
export default selectController;
