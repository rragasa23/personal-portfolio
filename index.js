const header = document.getElementById("header");

const virginiaTechBtn = document.getElementById("virginia-tech-btn");
const westrockBtn = document.getElementById("westrock-btn");
const evonikBtn = document.getElementById("evonik-btn");
const virginiaTechDiv = document.getElementById("virginia-tech");
const westrockDiv = document.getElementById("westrock");
const evonikDiv = document.getElementById("evonik");

const submitFormBtn = document.getElementById("submit-btn");

const year = document.getElementById("year");

document.addEventListener("DOMContentLoaded", function () {
  var sidebarLinks = document.querySelectorAll(".toggle-sidebar");

  sidebarLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      document.getElementById("sidebar-active").checked = false;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const enterButton = document.getElementById("enter-button");
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  enterButton.addEventListener("click", function () {
    preloader.style.opacity = "0";

    setTimeout(function () {
      preloader.style.display = "none";
      mainContent.style.display = "block";
    }, 500);
  });
});

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
