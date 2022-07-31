const dragonchangeimg1 = document.querySelector(".changedrimg1")
const dragonchangeimg2 = document.querySelector(".changedrimg2")
const dragonchangeimg3 = document.querySelector(".changedrimg3")

// Effet bouton change dragon articulé

document.getElementById("filtre1").style.backgroundColor = 'transparent';

dragonchangeimg1.addEventListener('click',()=>{
	document.getElementById("imgdragon").style.background = 'url(../../dragon/IMG_0931.JPG)';
	document.getElementById("imgdragon").style.backgroundSize = 'cover';
	document.getElementById("imgdragon").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre1").style.backgroundColor = 'transparent';

	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

dragonchangeimg2.addEventListener('click',()=>{
	document.getElementById("imgdragon").style.background = 'url(../../dragon/IMG_0932.JPG)';
	document.getElementById("imgdragon").style.backgroundSize = 'cover';
	document.getElementById("imgdragon").style.backgroundPosition = '50% 50%';

	document.getElementById("filtre2").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

dragonchangeimg3.addEventListener('click',()=>{
	document.getElementById("imgdragon").style.background = 'url(../../dragon/IMG_0934.JPG)';
	document.getElementById("imgdragon").style.backgroundSize = 'cover';
	document.getElementById("imgdragon").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre3").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
})

