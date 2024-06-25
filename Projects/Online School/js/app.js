"use strict";

window.onload = () => {
   mainFunction();
};

const mainFunction = function () {
   //Mobile Nagigation Work
   const btnMobile = document.querySelector(".btn-nav-mobile");
   const header = document.querySelector(".header");

   btnMobile.addEventListener("click", function () {
      header.classList.toggle("nav-open");
   });

   // Sticky Navigation
   const sectionHeroEl = document.querySelector(".hero-section");

   const obs = new IntersectionObserver(
      function (entries) {
         const ent = entries[0];
         if (ent.isIntersecting === false) {
            document.body.classList.add("sticky");
         }
         if (ent.isIntersecting) {
            document.body.classList.remove("sticky");
         }
      },
      {
         root: null,
         threshold: 0,
         rootMargin: "-74px",
      }
   );
   obs.observe(sectionHeroEl);
};
