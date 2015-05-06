$(function() {
  // GOTO ABOUT
  $("#goto-about").on('click', function() {
    $(window).scrollTo($("#about").offset().top - 60, 1000);
  });

  // GOTO SIGNUP
  $("#goto-signup").on('click', function() {
    $(window).scrollTo($("#signup").offset().top - 60, 1500);
  });
});