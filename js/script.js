$(function () {

  //    slick part
  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  });

  //   about part venobox
  new VenoBox({
    selector: '.my-video-links',
  });

  // slick slider for testimonial part
  $('.test_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    arrows:false,
  });
  // counter up js
  $('.count_up').counterUp();

  // slick slider for logo slider

  $('.logo_all').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:true,
    prevArrow:'<i class="fas fa-chevron-left prev_arrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right next_arrow"></i>',
  });







});