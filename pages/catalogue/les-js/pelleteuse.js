const pelleteusechangeimg1 = document.querySelector(".changeplimg1")
const pelleteusechangeimg2 = document.querySelector(".changeplimg2")
const pelleteusechangeimg3 = document.querySelector(".changeplimg3")

// Effet bouton change Fidget Star

document.getElementById("filtre1").style.backgroundColor = 'transparent';

pelleteusechangeimg1.addEventListener('click',()=>{
	document.getElementById("imgpelleteuse").style.background = 'url(../../pelleteuse/IMG_0938.JPG)';
	document.getElementById("imgpelleteuse").style.backgroundSize = 'cover';
	document.getElementById("imgpelleteuse").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre1").style.backgroundColor = 'transparent';

	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

pelleteusechangeimg2.addEventListener('click',()=>{
	document.getElementById("imgpelleteuse").style.background = 'url(../../pelleteuse/IMG_0941.JPG)';
	document.getElementById("imgpelleteuse").style.backgroundSize = 'cover';
	document.getElementById("imgpelleteuse").style.backgroundPosition = '50% 50%';

	document.getElementById("filtre2").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

pelleteusechangeimg3.addEventListener('click',()=>{
	document.getElementById("imgpelleteuse").style.background = 'url(../../pelleteuse/IMG_0939.JPG)';
	document.getElementById("imgpelleteuse").style.backgroundSize = 'cover';
	document.getElementById("imgpelleteuse").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre3").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
})