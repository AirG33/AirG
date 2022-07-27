const chargeusechangeimg1 = document.querySelector(".changechimg1")
const chargeusechangeimg2 = document.querySelector(".changechimg2")
const chargeusechangeimg3 = document.querySelector(".changechimg3")

// Effet bouton change Fidget Star

document.getElementById("filtre1").style.backgroundColor = 'transparent';

chargeusechangeimg1.addEventListener('click',()=>{
	document.getElementById("imgchargeuse").style.background = 'url(../../chargeuse/IMG_0945.JPG)';
	document.getElementById("imgchargeuse").style.backgroundSize = 'cover';
	document.getElementById("imgchargeuse").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre1").style.backgroundColor = 'transparent';

	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

chargeusechangeimg2.addEventListener('click',()=>{
	document.getElementById("imgchargeuse").style.background = 'url(../../chargeuse/IMG_0947.JPG)';
	document.getElementById("imgchargeuse").style.backgroundSize = 'cover';
	document.getElementById("imgchargeuse").style.backgroundPosition = '50% 50%';

	document.getElementById("filtre2").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

chargeusechangeimg3.addEventListener('click',()=>{
	document.getElementById("imgchargeuse").style.background = 'url(../../chargeuse/IMG_0946.JPG)';
	document.getElementById("imgchargeuse").style.backgroundSize = 'cover';
	document.getElementById("imgchargeuse").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre3").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
})