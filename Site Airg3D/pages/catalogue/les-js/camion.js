const camionchangeimg1 = document.querySelector(".changecaimg1")
const camionchangeimg2 = document.querySelector(".changecaimg2")
const camionchangeimg3 = document.querySelector(".changecaimg3")

// Effet bouton change Fidget Star

document.getElementById("filtre1").style.backgroundColor = 'transparent';

camionchangeimg1.addEventListener('click',()=>{
	document.getElementById("imgcamion").style.background = 'url(../../camion/IMG_0942.JPG)';
	document.getElementById("imgcamion").style.backgroundSize = 'cover';
	document.getElementById("imgcamion").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre1").style.backgroundColor = 'transparent';

	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

camionchangeimg2.addEventListener('click',()=>{
	document.getElementById("imgcamion").style.background = 'url(../../camion/IMG_0944.JPG)';
	document.getElementById("imgcamion").style.backgroundSize = 'cover';
	document.getElementById("imgcamion").style.backgroundPosition = '50% 50%';

	document.getElementById("filtre2").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

camionchangeimg3.addEventListener('click',()=>{
	document.getElementById("imgcamion").style.background = 'url(../../camion/IMG_0943.JPG)';
	document.getElementById("imgcamion").style.backgroundSize = 'cover';
	document.getElementById("imgcamion").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre3").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
})