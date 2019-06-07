import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel'

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";



$(".test").slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
