document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const closeMenu = document.querySelector(".close-menu");
  const fullscreenMenu = document.querySelector(".fullscreen-menu");

  menuToggle.addEventListener("click", function () {
    fullscreenMenu.classList.add("active");
  });

  closeMenu.addEventListener("click", function () {
    fullscreenMenu.classList.remove("active");
  });
});

const swiper = new Swiper(".swiper-container", {
  loop: true,
  effect: "fade",
  speed: 5000,
  autoplay: {
    delay: 2000,
  },
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const swiper2 = new Swiper(".swiper-container2", {
  loop: true,
  effect: "fade",
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
