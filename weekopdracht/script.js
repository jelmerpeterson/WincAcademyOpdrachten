let navToggleStatus = false;
let buttonToggle = document.getElementById("hamburger-toggle");
let buttonRood = document.getElementById("rood");
let buttonGroen = document.getElementById("groen");
let buttonBlauw = document.getElementById("blauw");
let buttonPaars = document.getElementById("paars");
let getHeader = document.querySelector("h1");
let getWelkom = document.getElementById("welkom");

//toggle on/off functie
function toggleNav() {
  let getToggleMenu = document.getElementById("toggle-menu");
  let getUlList = document.getElementById("ul-list");
  let getKruis = document.getElementById("kruis");
  let getMenu = document.getElementById("menu");
  if (navToggleStatus === false) {
    getToggleMenu.style.visibility = "visible";
    getToggleMenu.style.width = "250px";
    getUlList.style.opacity = "1";
    getUlList.style.transitionDelay = "0.8s";
    getKruis.style.visibility = "visible";
    getMenu.style.visibility = "hidden";
    getKruis.style.transitionDelay = "0.5s";
    navToggleStatus = true;
  } else if (navToggleStatus === true) {
    getUlList.style.opacity = "0";
    getUlList.style.transitionDelay = "0s";
    getToggleMenu.style.visibility = "visible";
    getToggleMenu.style.width = "65px";
    getKruis.style.visibility = "hidden";
    getMenu.style.visibility = "visible";
    getMenu.style.transitionDelay = "0.5s";
    navToggleStatus = false;
  }
}

//hamburger toggle event
buttonToggle.addEventListener("click", toggleNav);

// inner menu buttons
buttonRood.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  getWelkom.style.visibility = "hidden";
  getHeader.innerHTML = "Rood";
  toggleNav();
});

buttonGroen.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  getWelkom.style.visibility = "hidden";
  getHeader.innerHTML = "Groen";
  toggleNav();
});

buttonBlauw.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
  getWelkom.style.visibility = "hidden";
  getHeader.innerHTML = "Blauw";
  toggleNav();
});

buttonPaars.addEventListener("click", function () {
  document.body.style.backgroundColor = "purple";
  getWelkom.style.visibility = "hidden";
  getHeader.innerHTML = "Paars";
  toggleNav();
});
