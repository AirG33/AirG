const fidgetstarchangeimg1 = document.querySelector(".changefsimg1")
const fidgetstarchangeimg2 = document.querySelector(".changefsimg2")
const fidgetstarchangeimg3 = document.querySelector(".changefsimg3")

// Effet bouton change Fidget Star

document.getElementById("filtre1").style.backgroundColor = 'transparent';

fidgetstarchangeimg1.addEventListener('click',()=>{
	document.getElementById("imgstar").style.background = 'url(../../fidgetstar/IMG_0935.JPG)';
	document.getElementById("imgstar").style.backgroundSize = 'cover';
	document.getElementById("imgstar").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre1").style.backgroundColor = 'transparent';

	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

fidgetstarchangeimg2.addEventListener('click',()=>{
	document.getElementById("imgstar").style.background = 'url(../../fidgetstar/IMG_0936.JPG)';
	document.getElementById("imgstar").style.backgroundSize = 'cover';
	document.getElementById("imgstar").style.backgroundPosition = '50% 50%';

	document.getElementById("filtre2").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre3").style.backgroundColor = '#eedff962';
})

fidgetstarchangeimg3.addEventListener('click',()=>{
	document.getElementById("imgstar").style.background = 'url(../../fidgetstar/IMG_0937.JPG)';
	document.getElementById("imgstar").style.backgroundSize = 'cover';
	document.getElementById("imgstar").style.backgroundPosition = '50% 50%';
	document.getElementById("filtre3").style.backgroundColor = 'transparent';

	document.getElementById("filtre1").style.backgroundColor = '#eedff962';
	document.getElementById("filtre2").style.backgroundColor = '#eedff962';
})