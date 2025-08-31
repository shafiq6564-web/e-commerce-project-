const mag = document.querySelector(".header-icons");   // ek hi element lelo
const ham = document.querySelector(".menu-icon");      // ek hi element lelo

// ab logic
ham.addEventListener("click", function () {
  mag.classList.toggle("show");
});
