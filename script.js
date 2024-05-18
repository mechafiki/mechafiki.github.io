// Change navbar background color when scrolling
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var section = document.getElementById("hero");
  var sectionPosition = section.getBoundingClientRect();

  if (sectionPosition.top < 0) {
    navbar.style.backgroundColor = "rgba(16,18,51, 1)"; // Change transparency as needed
  } else {
    navbar.style.backgroundColor = "rgba(16,18,51, 0)"; // Initial transparency
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var linkedinLogo = document.querySelector(".linkedin-logo");
  linkedinLogo.addEventListener("click", function () {
    window.location.href = "https://www.linkedin.com/in/your-profile"; // Replace with your LinkedIn profile URL
  });
});

const dropdownButton = document.getElementById("dropdown-button");
const buttonBoundingClientRect = dropdownButton.getBoundingClientRect();
const chevron = document.getElementById("chevron");
const chevronBoudingClientRect = chevron.getBoundingClientRect();
const rightMenu =
  buttonBoundingClientRect.right - chevronBoudingClientRect.right;
const topMenu = chevronBoudingClientRect.top - buttonBoundingClientRect.top;

const mainMenu = document.getElementById("main-menu");
mainMenu.style.top = `${topMenu}px`;
mainMenu.style.right = `${rightMenu}px`;

const toggleDropdownMenu = () => {
  const dropdownMenu = document.getElementById("dropdown-menu");
  if (dropdownMenu.classList.contains("open")) {
    mainMenu.style.top = `${topMenu}px`;
    mainMenu.style.right = `${rightMenu}px`;
  } else {
    mainMenu.style.top = `${dropdownButton.clientHeight + 10}px`;
    mainMenu.style.right = 0;
  }

  dropdownMenu.classList.toggle("open");
};
