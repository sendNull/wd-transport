import 'boxicons';
import Swiper from 'swiper';
import 'swiper/css';

var navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    navbar.classList.toggle("active", window.scrollY > 10);
})