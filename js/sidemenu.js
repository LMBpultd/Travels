const logo = document.getElementById("logo");
const sideMenu = document.getElementById("sideMenu");
const menuLinks = sideMenu.querySelectorAll("a");

// Toggle menu when logo is clicked
logo.addEventListener("click", function () {
  sideMenu.classList.toggle("active");
});

// Hide menu when any link is clicked
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });
});

// Hide menu when clicking outside of it
document.addEventListener("click", function (event) {
  const isClickInsideMenu = sideMenu.contains(event.target);
  const isClickOnLogo = logo.contains(event.target);

  if (!isClickInsideMenu && !isClickOnLogo) {
    sideMenu.classList.remove("active");
  }
});