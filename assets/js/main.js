import 'boxicons';

import Splide from '@splidejs/splide';
// import '@splidejs/splide/css';

var navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("active", window.scrollY > 10);
})


// let reviewCarousel = new Swiper(".review-carousel", {
//     loop: true,
//     autoplay: true,
//     spaceBetween: 30,
//     slidesPerView: "auto",
//     // parallax: true,

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
// })

// reviewCarousel.init();

let reviewCarousel = new Splide(".review-carousel", {
    type   : 'loop',
    padding: '20%',
    // height: '100%',

    autoplay: true,
    drag: false,
    focus: 'center',
    pagination: false,
    updateOnMove: true,
    gap: '2em',
    easing: 'cubic-bezier(0.08,0.82,0.17,1)',
    speed: 800,

    breakpoints:{
        500: {
            padding: '0',
            
            arrows: false,
            drag: true,
        }
    }

});
    reviewCarousel.mount();

// $('.hamburger').click(function() {
//   $( this ).toggleClass( "active" );
// });


var hamburger = document.querySelector(".hamburger"),
    menuLinks = document.querySelectorAll(".menu-links"),
    menu = document.querySelector(".menu"),
    html = document.documentElement,
    blurOverlay = document.querySelector(".blur-overlay");

hamburger.onclick = function(){
  hamburger.classList.toggle("active");
  blurOverlay.classList.toggle("active");
  menu.classList.toggle("active");
  navbar.classList.toggle("active-menu");
  html.classList.toggle("hidden");
  menuLinks.forEach(function(link, index){
    setTimeout(() => {
        link.classList.toggle("active");
    }, index * 100)
  });
}

menu.addEventListener("click", function(event) {
  if (event.target.classList.contains("menu-links")) {
    menu.classList.remove("active");
    navbar.classList.remove("active-menu");
    hamburger.classList.remove("active");
    html.classList.remove("hidden");
    blurOverlay.classList.remove("active");
    menuLinks.forEach(function(link) {
      link.classList.remove("active");
    });
  }
});

blurOverlay.addEventListener("click", function(event) {
  if (event.target.classList.contains("active")) {
    menu.classList.remove("active");
    navbar.classList.remove("active-menu");
    hamburger.classList.remove("active");
    html.classList.remove("hidden");
    blurOverlay.classList.remove("active");
    menuLinks.forEach(function(link) {
      link.classList.remove("active");
    });
  }
});
