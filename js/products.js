const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});

let modeBtn = document.getElementById("catalog");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("catalog-open");
});
