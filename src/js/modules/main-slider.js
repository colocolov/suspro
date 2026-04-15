import Swiper, { Navigation } from "swiper";

Swiper.use([Navigation]);

const portfolioSlider = document.querySelector(".portfolio__slider");

if (portfolioSlider) {
  new Swiper(portfolioSlider, {
    loop: true,
    speed: 700,
    centeredSlides: true,
    slidesPerView: 1.7,
    spaceBetween: 10,
    initialSlide: 3, 
    // watchSlidesProgress: true,

    navigation: {
      nextEl: ".portfolio--next",
      prevEl: ".portfolio--prev",
      clickable: true,
    },

    breakpoints: {
      576: {
        slidesPerView:2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView:2.5,
        spaceBetween: 20,
      },
      992: {
        spaceBetween: 30,
        slidesPerView:3
      },
      1180: {
        slidesPerView:4
      },
      1361: {
        spaceBetween: 40,
        slidesPerView:5
      },
    },
  });
}
