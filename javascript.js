$(document).ready(function () {
  $('.navbar').animate({ opacity: '1' }, 1000);
  $('#thumbnail').animate({ opacity: '1' }, 1000);

  $(window).on('load', function () {
    $(window).scrollTop(0);
  });

  $(window).scroll(function () {
    var scrollpos = $(window).scrollTop(); // Posisi scroll
    if (scrollpos > $('.about').offset().top - 300) {
      $('.about .container').css({
        opacity: '1',
      });
    }
    if (scrollpos > $('.experience').offset().top - 300) {
      $('.experience .container').css({
        opacity: '1',
      });
    }
    if (scrollpos > $('.skill').offset().top - 300) {
      $('.skill .container').css({
        opacity: '1',
      });
    }
    if (scrollpos > $('.contact').offset().top - 300) {
      $('.contact .container').css({
        opacity: '1',
      });
    }
  });
});
