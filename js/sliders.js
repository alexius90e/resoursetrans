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

var swiper = new Swiper(".technologies .swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 1,
    slideShadows: true,
  },
  breakpoints: {
    586: {
      slidesPerView: 1.1,
    },
    768: {
      slidesPerView: 1.2,
    },
    1200: {
      slidesPerView: 1.4,
    },
    1440: {
      slidesPerView: 1.665,
    },
  },
  pagination: {
    el: ".technologies .swiper-pagination",
  },
  navigation: {
    nextEl: ".technologies .swiper-button-next",
    prevEl: ".technologies .swiper-button-prev",
  },
});
