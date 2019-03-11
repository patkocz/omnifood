$(document).ready(function () {

  $('.jq-section-steps').click(function () {
    $('html, body').animate({ scrollTop: $('.section-steps').offset().top }, 1000);
  });

  $('.jq-section-plan').click(function () {
    $('html, body').animate({ scrollTop: $('.section-plan').offset().top }, 1000);
  });

  $('.jq-section-cities').click(function () {
    $('html, body').animate({ scrollTop: $('.section-cities').offset().top }, 1000);
  });

  $('.jq-section-fetures').click(function () {
    $('html, body').animate({ scrollTop: $('.section-fetures').offset().top }, 1000);
  });
})