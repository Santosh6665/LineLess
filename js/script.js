
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}
function toggleMenu() {
  const menu = document.getElementById("menu");
  const menuBtn = document.getElementById("menu-btn");
  menu.classList.toggle("show");
  menuBtn.classList.toggle("active");
}


function toggleProfile() {
  const dropdown = document.getElementById("profile-dropdown");
  const profileImg = document.querySelector(".profile-img");

  const isOpen = dropdown.style.display === "block";

  if (isOpen) {
    dropdown.style.display = "none";
    profileImg.classList.remove("glow");
  } else {
    dropdown.style.display = "block";
    profileImg.classList.add("glow");
  }
}

// Close profile dropdown if clicked outside
document.addEventListener("click", (event) => {
  const profile = document.querySelector(".profile-container");
  const profileImg = document.querySelector(".profile-img");
  if (!profile.contains(event.target)) {
    document.getElementById("profile-dropdown").style.display = "none";
    profileImg.classList.remove("glow");
  }
});

// hamburger Close profile dropdown if clicked outside
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
function toggleMenu() {
  menu.classList.toggle("show");
}
// Close menu when clicking outside
document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
    menu.classList.remove("show");
  }
});

