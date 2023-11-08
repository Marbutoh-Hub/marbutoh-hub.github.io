let menu = document.querySelector("#menu-icon");
let navBar = document.querySelectorAll(".navbars");
const currentUrl = window.location.href;
const myPage = currentUrl.split("?");
let page = myPage[1];

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navBar[0].classList.toggle("open");
};

// Mobile navigasi
let menuTooggle = document.querySelector(".menuTooggle");
let mNavigasi = document.querySelector(".m-navigasi");
menuTooggle.onclick = function () {
  mNavigasi.classList.toggle("mactive");
};

let list = document.querySelectorAll(".list");
var li = document.getElementById("m-navigasi").getElementsByTagName("li");
