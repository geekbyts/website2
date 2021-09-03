let text=document.getElementById('text');
let header=document.getElementById('header');
 window.addEventListener('scroll', function(){
             let value= window.scrollY;
 
             text.style.top=65 + value * -0.5 + '%';
})
 
window.addEventListener("scroll",function(){
var nav = document.querySelector("nav");
 nav.classList.toggle("sticky",window,scrollY > 0);
})
const menuBtn = document.querySelector('.menu-btn');
        let menuOpen = false;
        menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
             menuBtn.classList.add('open');
            menuOpen = true;
            } else {
            menuBtn.classList.remove('open');
                menuOpen = false;
            }
});
function myFunction1() {
    var x = document.getElementById("myTopnav");
    if (x.className === "rightSection") {
      x.className += " responsive";
    } else {
      x.className = "rightSection";
    }
  }
  window.onscroll = function() {myFunction()};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}