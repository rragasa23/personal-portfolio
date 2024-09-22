const header = document.getElementById("header");

const virginiaTechBtn = document.getElementById("virginia-tech-btn");
const westrockBtn = document.getElementById("westrock-btn");
const evonikBtn = document.getElementById("evonik-btn");
const virginiaTechDiv = document.getElementById("virginia-tech");
const westrockDiv = document.getElementById("westrock");
const evonikDiv = document.getElementById("evonik");

const submitFormBtn = document.getElementById("submit-btn");

const year = document.getElementById("year");

virginiaTechBtn.addEventListener("click", () => {
  virginiaTechDiv.style.display = "flex";
  westrockDiv.style.display = "none";
  evonikDiv.style.display = "none";
});

westrockBtn.addEventListener("click", () => {
  virginiaTechDiv.style.display = "none";
  westrockDiv.style.display = "flex";
  evonikDiv.style.display = "none";
});

evonikBtn.addEventListener("click", () => {
  virginiaTechDiv.style.display = "none";
  westrockDiv.style.display = "none";
  evonikDiv.style.display = "flex";
});

window.onscroll = function () {
  if (window.scrollY > 22) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

submitFormBtn.addEventListener("submit", function (e) {
  e.preventDefault();
});

year.innerHTML = new Date().getFullYear();
