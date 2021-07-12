
// mobile-menu

var hamb_lines = document.querySelector(".hamb_lines");
var body = document.querySelector("body");
// hamb_lines.onclick = function () {
  
// }
hamb_lines.addEventListener("click", e => {
  body.classList.toggle("responsive_menu");
  
})

// preloader

// window.onload = function(){
//   //hide the preloader
//   document.querySelector(".loading").style.opacity = "0";
//   document.querySelector(".loading").style.visibility = "hidden";
//   document.querySelector(".loading").style.transition = "0.5s ease";
// }

window.addEventListener("load", e =>{
  //hide the preloader
  document.querySelector(".loading").style.opacity = "0";
  document.querySelector(".loading").style.visibility = "hidden";
  document.querySelector(".loading").style.transition = "0.5s ease";
})
