// Initialize Swiper Slider
// Set Landing Page Slider
const swiperElement = document.querySelector(".swiper")
const swiper = new Swiper(swiperElement, {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  parallax: true,
  speed: 1400,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Start set config of AOS Library
AOS.init();