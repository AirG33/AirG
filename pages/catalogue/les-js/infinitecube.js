const infinitecubechangeimg1 = document.querySelector(".changesinmg1")
const infinitecubechangeimg2 = document.querySelector(".changesinmg2")
const infinitecubechangeimg3 = document.querySelector(".changesinmg3")

// Effet bouton change Fidget Star

document.getElementById("filtre1").style.backgroundColor = 'transparent';

infinitecubechangeimg1.addEventListener('click',()=>{
	document.getElementById("imginfinite").style.background = 'url(../../infinitecube/IMG_0929.JPG)';
	document.getElementById("imginfinite").style.backgroundSize = 'cover';
	document.getElementById("imginfinite").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre1").style.backgroundColor = 'transparent';

	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

infinitecubechangeimg2.addEventListener('click',()=>{
	document.getElementById("imginfinite").style.background = 'url(../../infinitecube/IMG_0930.JPG)';
	document.getElementById("imginfinite").style.backgroundSize = 'cover';
	document.getElementById("imginfinite").style.backgroundPosition = '50% 50%';

	document.getElementById("filtre2").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

infinitecubechangeimg3.addEventListener('click',()=>{
	document.getElementById("imginfinite").style.background = 'url()';
	document.getElementById("imginfinite").style.backgroundSize = 'cover';
	document.getElementById("imginfinite").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre3").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
})