import vars from "../_vars";

(function () {
   'use strict';

   vars.$scrollDown.addEventListener('click', scrollDown);

   function scrollDown() {
      var windowCoords = document.documentElement.clientHeight;
      (function scroll() {
         if (window.pageYOffset < windowCoords) {
            window.scrollBy(0, 10);
            setTimeout(scroll, 0);
         }
      })();
   }
})();