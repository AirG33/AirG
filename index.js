const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")
const contact = document.querySelector(".cte")

const avionchangeimg1 = document.querySelector(".changeimg1")
const avionchangeimg2 = document.querySelector(".changeimg2")
const avionchangeimg3 = document.querySelector(".changeimg3")


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbars");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  if(window.pageYOffset == 0) {
	navbar.classList.remove("sticky");
  }
} 


menuHamburger.addEventListener('click',()=>{
	navLinks.classList.toggle('mobile-menu')
	if(document.body.style.overflow != "hidden"){
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'visible';
	}

	window.scrollTo(0, 0);

	
})
		
	contact.addEventListener('click',()=>{

		if(navLinks.classList.contains("mobile-menu")) {
			navLinks.classList.toggle('mobile-menu')

			if(document.body.style.overflow != "visible"){
				document.body.style.overflow = 'visible';
			} else {
				document.body.style.overflow = 'hidden';
			}
		}
	
})

// Effet bouton change avion sur support

document.getElementById("filtre1").style.backgroundColor = 'transparent';

avionchangeimg1.addEventListener('click',()=>{
	document.getElementById("imgavion").style.background = 'url(../../avion/IMG_0928.JPG)';
	document.getElementById("imgavion").style.backgroundSize = 'cover';
	document.getElementById("imgavion").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre1").style.backgroundColor = 'transparent';

	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

avionchangeimg2.addEventListener('click',()=>{
	document.getElementById("imgavion").style.background = 'url(../../avion/IMG_0926.JPG)';
	document.getElementById("imgavion").style.backgroundSize = 'cover';
	document.getElementById("imgavion").style.backgroundPosition = '50% 50%';

	document.getElementById("filtre2").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

avionchangeimg3.addEventListener('click',()=>{
	document.getElementById("imgavion").style.background = 'url(../../avion/IMG_0927.JPG)';
	document.getElementById("imgavion").style.backgroundSize = 'cover';
	document.getElementById("imgavion").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre3").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
})













