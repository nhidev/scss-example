(function($) {
  "use strict";

  //Run function When Document Ready
  $(document).ready(function() {
    initGetHWindow();
    initNavbarSrcoll();
  });

  //Navbar Scroll
  function initNavbarSrcoll() {
    if ($('.main-header').length > 0) {
      var mainbottom = $('.main-header').offset().top + $('.main-header').height();
      $(window).on('scroll', function() {
        var stopWindow = Math.round($(window).scrollTop()) + $('.menu-area').outerHeight();
        conditionNavbar(stopWindow, mainbottom);
      });
    }
  }

  //Check Navar Show
  function initCheckNav() {
    if ($('.main-header').length > 0) {
      var mainbottom = $('.main-header').offset().top + $('.main-header').height();
      var stopWindow = Math.round($(window).scrollTop()) + $('.menu-area').outerHeight();
      conditionNavbar(stopWindow, mainbottom);
    }
  }

  //Condition Navbar
  function conditionNavbar(stopWindow, mainbottom) {
    if (stopWindow > mainbottom) {
      $('.menu-area').addClass('nav-fixed');
    } else {
      $('.menu-area').removeClass('nav-fixed nav-white-bg');
    }
    if ((stopWindow) > $('.menu-area').outerHeight()) {
      $('.menu-area').addClass('nav-white-bg');
    }
  }

  //Set header to window
  function initGetHWindow() {
    var wHeight = $(window).height();
    if (wHeight > 600 && !$('.main-header').hasClass('no-window')) {
      $('.main-header, .header-content-fixed').height(wHeight);
    }
  }

})(jQuery);
