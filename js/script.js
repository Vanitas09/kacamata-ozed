// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// e.target : yg di klik mouse kita, code diatas untuk arahan klik mouse kita.
// cara bacanya (1) : if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)
// cara baca code (1) : selama yg di klik 'e.target' bukan 'hamburger' dan bukan 'navbar' maka remove class 'active' yaitu 'right: 0;'
