import vars from "../_vars";

(function () {
   'use strict';

   window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
         vars.$scrollUp.classList.add('button--show');
      }
      if (scrolled < coords) {
         vars.$scrollUp.classList.remove('button--show');
      }
   });

   function backToTop() {
      if (window.pageYOffset > 0) {
         window.scrollBy(0, -20);
         setTimeout(backToTop, 0);
      }
   }

   vars.$scrollUp.addEventListener('click', backToTop);
})();