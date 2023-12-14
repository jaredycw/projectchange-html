const hamburger = document.querySelector(".hamburger-box");
const header = document.querySelector(".site-header")
const navMenu = document.querySelector(".overlay");
const navItem = document.querySelectorAll(".nav-item");

const acc = document.getElementsByClassName("post-accordion");

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  if (header.classList.contains('active')) {
    console.log('header active')
  } else {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("masthead").style.top = "0";
    } else {
      document.getElementById("masthead").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }
}
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  header.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.toggle("stop-scrolling");
});
for (i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
}


for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}