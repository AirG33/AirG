const rouleauchangeimg1 = document.querySelector(".changeroimg1")
const rouleauchangeimg2 = document.querySelector(".changeroimg2")
const rouleauchangeimg3 = document.querySelector(".changeroimg3")

// Effet bouton change Fidget Star

document.getElementById("filtre1").style.backgroundColor = 'transparent';

rouleauchangeimg1.addEventListener('click',()=>{
	document.getElementById("imgrouleau").style.background = 'url(../../rouleaucompresseur/IMG_0948.JPG)';
	document.getElementById("imgrouleau").style.backgroundSize = 'cover';
	document.getElementById("imgrouleau").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre1").style.backgroundColor = 'transparent';

	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

rouleauchangeimg2.addEventListener('click',()=>{
	document.getElementById("imgrouleau").style.background = 'url(../../rouleaucompresseur/IMG_0949.JPG)';
	document.getElementById("imgrouleau").style.backgroundSize = 'cover';
	document.getElementById("imgrouleau").style.backgroundPosition = '50% 50%';

	document.getElementById("filtre2").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

rouleauchangeimg3.addEventListener('click',()=>{
	document.getElementById("imgrouleau").style.background = 'url()';
	document.getElementById("imgrouleau").style.backgroundSize = 'cover';
	document.getElementById("imgrouleau").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre3").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
})