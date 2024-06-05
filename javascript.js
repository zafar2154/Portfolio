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

function sendEmail() {
  const form = document.querySelector('form');
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const bodyMessage =
    'email : ' + email + '<br> nama : ' + name + '<br> message : ' + message;

  Email.send({
    SecureToken: '3aed7a20-c5b1-4c4c-8c9c-dd532d14e732',
    To: 'zafar2154.ez@gmail.com',
    From: 'zafar2154.ez@gmail.com',
    Subject: 'This is the subject',
    Body: bodyMessage,
  }).then((message) => {
    if (message == 'OK') {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'your message has been send',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
}
form.addEventListener('submit', (e) => {
  e.preventDefault();
  sendEmail();
});
