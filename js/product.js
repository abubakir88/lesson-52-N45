const indicators = document.querySelector(".indicators");
const show = document.querySelector("#show img");

indicators.addEventListener("click", (event) => {
  let imgUrl = event.target.src;
  imgUrl && (show.src = imgUrl);
});

// NAVBAR BURGER
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});

// CATALOG

let modeBtn = document.getElementById("catalog");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("catalog-open");
});

// MODAL
const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const btnSubmit = document.getElementById("submit");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

btnOpen.addEventListener("click", function (e) {
  modal.classList.toggle("open");
  // document.body.style.overflow = "hidden";
});

btnClose.addEventListener("click", function (e) {
  modal.classList.remove("open");
  document.body.style.overflow = "auto";
});

modalContent.addEventListener("click", function (e) {
  e.stopPropagation();
});

modal.addEventListener("click", function (e) {
  modal.classList.remove("open");
  document.body.style.overflow = "auto";
});
