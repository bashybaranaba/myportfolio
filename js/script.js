let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

document.getElementById("credits-link").addEventListener("click", function () {
  document.getElementById("credits-modal").style.display = "flex";
});

document
  .querySelector(".close-credits-modal")
  .addEventListener("click", function () {
    document.getElementById("credits-modal").style.display = "none";
  });

window.onclick = function (event) {
  let modal = document.getElementById("credits-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

function toggleMenu() {
  var navLinks = document.querySelector("nav ul");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}

// Listen for window resize events
window.addEventListener("resize", function () {
  var navLinks = document.querySelector("nav ul");
  if (window.innerWidth > 768 && navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
  navLinks.removeAttribute("style");
});
