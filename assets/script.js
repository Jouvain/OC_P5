/********* VARIABLES *************/
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//compteurs (slider et bullets points)
let compteur = 0
let iDot = 1 
let i2 = 0
//récupération d'éléments
const arrowLeft = document.querySelector("#banner .arrow_left")
const picture = document.querySelector(".banner-img")
const blurb = document.querySelector("#banner p")
const arrowRight = document.querySelector("#banner .arrow_right")
const tableauDot = [] 
let targetDot = document.querySelector(`.dots :nth-child(${iDot})`)
let dots = document.querySelector(".dots")
//récupération des valeurs // à intégrer en fonction
let completionImage = slides[compteur].image 
let completionTexte = slides[compteur].tagLine
// variable pour stock d'élements à créer/modifier
let dot

//renvoie fonction "show(n)" -- pour l'attr onclick des BP
function writing(n){
	let testing = `show(${n})`
	return testing
}

//mise en place des BP
slides.forEach(() =>
	{dot = document.createElement("div")
	dots.append(dot)
	dot.classList.add("dot")
	dot.setAttribute("onclick", writing(i2))
	i2 ++
	tableauDot.push(dot)}
)
tableauDot[0].classList.add("dot_selected")



//actualise bannière selon BP cliqué
function show(n){
	eraseDot(iDot)
	compteur = n
	iDot = compteur+1
	actualizeBanner(compteur, iDot)
}

//Déclenchement des boutons-flèches au clic
arrowLeft.addEventListener("click", function(event)
	{sliding(event.clientX)}
)
arrowRight.addEventListener("click", function(event)
	{sliding(event.clientX)}
)

//actualisation bannière selon L/R
function sliding(clientX){
	eraseDot(iDot)
	clientX > 100 ? Right() : Left()
	actualizeBanner(compteur, iDot)
}
function Left(){
	if(compteur > 0){
		compteur --
		iDot --
	}
	else{
		compteur = slides.length-1
		iDot = slides.length
	}
}
function Right(){
	if (compteur < slides.length-1){
		compteur ++
		iDot ++
	}
	else{
		compteur = 0
		iDot = 1
	}
}

//récup valeurs puis modification des élements de la bannière
function actualizeBanner(compteur, iDot){
	completionImage = slides[compteur].image
	completionTexte = slides[compteur].tagLine
	picture.setAttribute("src", "./assets/images/slideshow/"+completionImage)
	blurb.innerHTML = completionTexte
	targetDot = document.querySelector(".dots :nth-child("+iDot+")")
	targetDot.classList.add("dot_selected")
}
//BP actuel déselectionné
function eraseDot(iDot){
	dot = document.querySelector(".dots :nth-child("+(iDot)+")")
	dot.classList.remove("dot_selected")
}

