const aboutSwiper = new Swiper(".about .swiper", {
  spaceBetween: 12,
  pagination: {
    el: ".about .swiper-pagination",
  },
  navigation: {
    nextEl: ".about .swiper-button-next",
    prevEl: ".about .swiper-button-prev",
  },
  breakpoints: {
    568: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
