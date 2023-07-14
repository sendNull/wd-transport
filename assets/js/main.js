import 'boxicons';
// import Swiper bundle with all modules installed
// import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import Swiper from 'swiper';

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
    height: '100%',
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