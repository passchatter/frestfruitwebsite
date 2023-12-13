const headerr = document.querySelector(".header");
const menu = document.querySelector(".nav-menu");
const closee = document.querySelector(".nav-close");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");


menu.addEventListener("click", function(){
   navbar.classList.add("active");
   overlay.classList.add("active");
});

closee.addEventListener("click", function(){
    navbar.classList.remove("active");
    overlay.classList.remove("active");
 });


 window.addEventListener("scroll", function(){
    if(this.scrollY <= 20) headerr.classList.remove("active") ; else headerr.classList.add("active");
 });


 const navLink = document.querySelectorAll('.nav-link');
function link(){
   navbar.classList.remove("active");
   overlay.classList.remove("active");
}
navLink.forEach(n => n.addEventListener('click', link));