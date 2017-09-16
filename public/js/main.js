(function($) {
  'use strict';
  $(document).ready(function() {
    initGetHWindow();
    initNavbarSrcoll();
  });
  function initNavbarSrcoll() {
    if ($('.main-header').length > 0) {
      var mainbottom = $('.main-header').offset().top + $('.main-header').height();
      $(window).on('scroll', function() {
        var stopWindow = Math.round($(window).scrollTop()) + $('.menu-area').outerHeight();
        conditionNavbar(stopWindow, mainbottom);
      });
    }
  }
  function initCheckNav() {
    if ($('.main-header').length > 0) {
      var mainbottom = $('.main-header').offset().top + $('.main-header').height();
      var stopWindow = Math.round($(window).scrollTop()) + $('.menu-area').outerHeight();
      conditionNavbar(stopWindow, mainbottom);
    }
  }
  function conditionNavbar(stopWindow, mainbottom) {
    if (stopWindow > mainbottom) {
      $('.menu-area').addClass('nav-fixed');
    } else {
      $('.menu-area').removeClass('nav-fixed nav-white-bg');
    }
    if (stopWindow > $('.menu-area').outerHeight()) {
      $('.menu-area').addClass('nav-white-bg');
    }
  }
  function initGetHWindow() {
    var wHeight = $(window).height();
    if (wHeight > 600 && !$('.main-header').hasClass('no-window')) {
      $('.main-header, .header-content-fixed').height(wHeight);
    }
  }
})(jQuery);