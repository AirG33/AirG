const chariotchangeimg1 = document.querySelector(".changeceimg1")
const chariotchangeimg2 = document.querySelector(".changeceimg2")
const chariotchangeimg3 = document.querySelector(".changeceimg3")

// Effet bouton change Fidget Star

document.getElementById("filtre1").style.backgroundColor = 'transparent';

chariotchangeimg1.addEventListener('click',()=>{
	document.getElementById("imgchariot").style.background = 'url(../../chariotelevateur/IMG_0950.JPG)';
	document.getElementById("imgchariot").style.backgroundSize = 'cover';
	document.getElementById("imgchariot").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre1").style.backgroundColor = 'transparent';

	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

chariotchangeimg2.addEventListener('click',()=>{
	document.getElementById("imgchariot").style.background = 'url(../../chariotelevateur/IMG_0954.JPG)';
	document.getElementById("imgchariot").style.backgroundSize = 'cover';
	document.getElementById("imgchariot").style.backgroundPosition = '50% 50%';

	document.getElementById("filtre2").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

chariotchangeimg3.addEventListener('click',()=>{
	document.getElementById("imgchariot").style.background = 'url(../../chariotelevateur/IMG_0952.JPG)';
	document.getElementById("imgchariot").style.backgroundSize = 'cover';
	document.getElementById("imgchariot").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre3").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
})