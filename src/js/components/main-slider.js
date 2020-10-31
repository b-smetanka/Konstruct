import Swiper from "../vendor/swiper.min.js";
import vars from '../_vars';

const bannerSlider = new Swiper(vars.$bannerSlider, {
  loop: true,
  containerModifierClass: 'banner-slider-',
  slidesPerView: 1,
  navigation: {
    nextEl: '.box-prev-btn',
    prevEl: '.box-next-btn',
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 880px
    880: {
      slidesPerView: 2,
    },
    // when window width is >= 940px
    940: {
      slidesPerView: 3,
    }
  }
});