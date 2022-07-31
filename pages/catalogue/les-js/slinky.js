const slinkychangeimg1 = document.querySelector(".changeslimg1")
const slinkychangeimg2 = document.querySelector(".changeslimg2")
const slinkychangeimg3 = document.querySelector(".changeslimg3")

// Effet bouton change Fidget Star

document.getElementById("filtre1").style.backgroundColor = 'transparent';

slinkychangeimg1.addEventListener('click',()=>{
	document.getElementById("imgslinky").style.background = 'url(../../slinky/IMG_0925.JPG)';
	document.getElementById("imgslinky").style.backgroundSize = 'cover';
	document.getElementById("imgslinky").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre1").style.backgroundColor = 'transparent';

	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

slinkychangeimg2.addEventListener('click',()=>{
	document.getElementById("imgslinky").style.background = 'url(../../slinky/IMG_0924.JPG)';
	document.getElementById("imgslinky").style.backgroundSize = 'cover';
	document.getElementById("imgslinky").style.backgroundPosition = '50% 50%';

	document.getElementById("filtre2").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

slinkychangeimg3.addEventListener('click',()=>{
	document.getElementById("imgslinky").style.background = 'url()';
	document.getElementById("imgslinky").style.backgroundSize = 'cover';
	document.getElementById("imgslinky").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre3").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
})