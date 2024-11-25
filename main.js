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
