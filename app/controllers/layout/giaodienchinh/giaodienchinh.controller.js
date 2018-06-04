
function giaodienchinhController ($rootScope, $scope, $timeout) {
  const vm = this;
  var _resizeFooter = function() {
    if ($(document).width() > 767) {    
      if ($('body').hasClass('sidebar-collapse')) {        
        $('.main-footer').width($(document).width() - 64);                      
      }  
      else {
        $('.main-footer').width($(window).width() - 244);
      }
    }
    else {
      $('.main-footer').width($(document).width());   
    }
  };
  $(document).on('click', '[data-toggle="push-menu"]', function (e) {
    $timeout(function () {
      _resizeFooter();
    })    
  }); 
  $timeout(function () {
    _resizeFooter();
  });  
}

/* @ngInject */
export default giaodienchinhController;