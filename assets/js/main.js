import 'boxicons';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

var navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("active", window.scrollY > 10);
})


// let reviewCarousel = new Swiper(".review-carousel", {
    
// })