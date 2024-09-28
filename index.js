const header = document.getElementById("header");

const virginiaTechBtn = document.getElementById("virginia-tech-btn");
const westrockBtn = document.getElementById("westrock-btn");
const evonikBtn = document.getElementById("evonik-btn");
const virginiaTechDiv = document.getElementById("virginia-tech");
const westrockDiv = document.getElementById("westrock");
const evonikDiv = document.getElementById("evonik");

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

  enterButton.addEventListener("click", function () {
    preloader.style.opacity = "0";

    setTimeout(function () {
      preloader.style.display = "none";
    }, 500);
  });
});

const hideAllCompanies = () => {
  const allCompanies = [virginiaTechDiv, westrockDiv, evonikDiv];
  allCompanies.forEach((company) => {
    company.classList.remove("visible");
  });
};

const showCompany = (companyDiv) => {
  setTimeout(() => {
    companyDiv.classList.add("visible");
  }, 50); // Delay to make the transition smoother
};

virginiaTechBtn.addEventListener("click", () => {
  hideAllCompanies();
  virginiaTechDiv.style.display = "flex";
  virginiaTechBtn.style.filter = "grayscale(0%)";
  virginiaTechBtn.style.boxShadow = "inset 0px 0px 5px #000000";

  westrockDiv.style.display = "none";
  westrockBtn.style.filter = "grayscale(100%)";
  westrockBtn.style.boxShadow = "none";

  evonikDiv.style.display = "none";
  evonikBtn.style.filter = "grayscale(100%)";
  evonikBtn.style.boxShadow = "none";
  showCompany(virginiaTechDiv);
});

westrockBtn.addEventListener("click", () => {
  hideAllCompanies();
  virginiaTechDiv.style.display = "none";
  virginiaTechBtn.style.filter = "grayscale(100%)";
  virginiaTechBtn.style.boxShadow = "none";

  westrockDiv.style.display = "flex";
  westrockBtn.style.filter = "grayscale(0%)";
  westrockBtn.style.boxShadow = "inset 0px 0px 5px #000000";

  evonikDiv.style.display = "none";
  evonikBtn.style.filter = "grayscale(100%)";
  evonikBtn.style.boxShadow = "none";
  showCompany(westrockDiv);
});

evonikBtn.addEventListener("click", () => {
  hideAllCompanies();
  virginiaTechDiv.style.display = "none";
  virginiaTechBtn.style.filter = "grayscale(100%)";
  virginiaTechBtn.style.boxShadow = "none";

  westrockDiv.style.display = "none";
  westrockBtn.style.filter = "grayscale(100%)";
  westrockBtn.style.boxShadow = "none";

  evonikDiv.style.display = "flex";
  evonikBtn.style.filter = "grayscale(0%)";
  evonikBtn.style.boxShadow = "inset 0px 0px 5px #000000";
  showCompany(evonikDiv);
});

window.onscroll = function () {
  if (window.scrollY > 22) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
};

year.innerHTML = new Date().getFullYear();
