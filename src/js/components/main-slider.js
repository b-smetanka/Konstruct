import Swiper from "../vendor/swiper.min.js";
import vars from "../_vars";

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
      // when window width is >= 480px
      480: {
         slidesPerView: 1,
      },
      // when window width is >= 640px
      640: {
         slidesPerView: 2,
      }
   }
});