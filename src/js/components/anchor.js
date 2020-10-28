const anchors = document.querySelectorAll('.nav__link')

for (let anchor of anchors) {
   anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })

      if (e.target.classList.contains('nav__link')) {
         document.querySelectorAll('.nav__link').forEach(el => el.classList.remove('nav__link--current'));

         e.target.classList.add('nav__link--current');
      }
   })

   const header = document.querySelector("header");

   // Get the offset position of the navbar
   let sticky = header.offsetTop;

   // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
   function myFunction() {
      if (window.pageYOffset > sticky) {
         header.classList.add("header-fixed");
      } else {
         header.classList.remove("header-fixed");
      }
   }

   window.onscroll = function() {myFunction()};
}