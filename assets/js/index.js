const thumbImgs = document.querySelectorAll(".thumb-imgs img");
const img = document.querySelector("#img-box img");
const circle = document.querySelector("#img-box .circle");
const circleFixed = document.querySelector("#img-box .circle-fixed");
const styler = document.getElementById("styler");
const nvaLinks = document.querySelectorAll(".main-nav ul li a");

thumbImgs.forEach((thumbImg) => {
  thumbImg.addEventListener("click", (e) => {
    const { src, color } = e.target.dataset;

    img.src = src;

    circleFixed.style.backgroundColor = color;

    styler.innerHTML = `
      <style>
        :root {
          --color-primary: ${color};
          --color-gray: hsl(0, 0%, 20%);
        }
      </style>
    `;
  });
});

// toggle the navbar
document
  .querySelector(".main-nav .navbar-toggler")
  .addEventListener("click", (e) => {
    document.querySelector(".main-nav ul").classList.toggle("open");
  });

const swiper = new Swiper(".swiper", {
  speed: 400,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // slidesPerView: 1, // number of shown slides "auto" for responsive
  slidesPerView: "auto",
  spaceBetween: 16, // space between two slides
  // direction: "vertical", // vertical mode
  centeredSlides: true, // to make current slide in the center
  // freeMode: true,  // to make slides move without restrictions
  loop: true, // to make slides loop
  autoHeight: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

// toggle the navbar active
nvaLinks.forEach((nvaLink) => {
  nvaLink.addEventListener("click", (e) => {
    nvaLinks.forEach((nvaLink) => {
      nvaLink.classList.remove("active");
    });

    e.target.classList.add("active");
    document.querySelector(".main-nav ul").classList.toggle("open");
  });
});

document.querySelectorAll(".theming .theme-color").forEach((ele) => {
  ele.addEventListener("click", (e) => {
    const { color } = e.target.dataset;
    styler.innerHTML = `
      <style>
        :root {
          --color-primary: ${color};
          --color-gray: hsl(0, 0%, 20%);
        }
      </style>
    `;
  });
});
