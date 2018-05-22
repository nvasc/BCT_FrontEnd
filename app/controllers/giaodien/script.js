$(document).ready(function () {
  function resizeFooter() {
    if ($('body').hasClass('sidebar-collapse')) {      
      $('.main-footer').width($(document).width() - 80);
    }  
    else {
      $('.main-footer').width($(window).width() - 260);
    }  
  };

  $(document).on('click', '[data-toggle="push-menu"]', function (e) {
    resizeFooter();
  });
  resizeFooter();  
});
  