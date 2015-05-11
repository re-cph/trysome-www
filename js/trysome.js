(function ($) {

  // GOTO SIGNUP
  $("#goto-signup").on('click', function() {
    $(window).scrollTo($("#signup").offset().top - 60, 1500);
  });

})(jQuery);