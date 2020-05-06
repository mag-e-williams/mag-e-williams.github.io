(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  // $('.js-scroll-trigger').click(function() {
  //   $('.navbar-collapse').collapse('hide');
  // });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
  $('#header-icon').toggle();
  $('#sideNav').toggle();
});


$('.overlay-menu a').click(function() {
  $('.button_container').toggleClass('active');
  $('#overlay').toggleClass('open');
  $('#header-icon').toggle();
  $('#sideNav').toggle();

  return false;
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {

  var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {

          event.preventDefault();
          // event.stopPropagation();

          console.log("fuck")
        }
        else {


          console.log("validation")
        }
        form.classList.add('was-validated');
      }, false);

    });

})


if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

$('#contact-form').submit(function () {
  'use strict';
  var forms = document.getElementsByClassName('needs-validation');
  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
      }
      else {
        document.getElementById("contact-form").reset();
        $('#form-modal').modal('show');
      }
      form.classList.add('was-validated');
    }, false);
  });
  return false;
});


