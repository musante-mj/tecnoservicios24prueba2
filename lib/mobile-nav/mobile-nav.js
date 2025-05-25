(function ($) {
  "use strict";

  if ($('.main-nav').length) {
    var $mobile_nav = $('.main-nav').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="fa fa-bars"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    // Toggle mobile menu
    $(document).on('click', '.mobile-nav-toggle', function () {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('.mobile-nav-overly').toggle();
    });

    // Dropdown toggle (only if submenu exists)
    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
      var $submenu = $(this).next('ul');
      if ($submenu.length) {
        e.preventDefault(); // prevent only if submenu exists
        $submenu.slideToggle(300);
        $(this).parent().toggleClass('active');
      }
    });

    // Close nav if click outside
    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active'); // Fixed typo here
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

})(jQuery);
