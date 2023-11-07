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
//récupération d'éléments
let arrowLeft = document.querySelector("#banner .arrow_left")
let picture = document.querySelector(".banner-img")
let blurb = document.querySelector("#banner p")
let arrowRight = document.querySelector("#banner .arrow_right")
let targetDot = document.querySelector(".dots :nth-child("+iDot+")")
let dots = document.querySelector(".dots")
//récupération des valeurs
let completionImage = slides[compteur].image
let completionTexte = slides[compteur].tagLine
// variable pour stock d'élements à créer/modifier
let dot = ""


//mise en place de X bullets points (selon tableau)
for(i=0 ; i < slides.length ; i++){
	dot = document.createElement("div")
	dots.prepend(dot)
	dot.classList.add("dot")
}//premier BP sélectionné au chargement de la page
dot.classList.add("dot_selected")


//Déclenchement des boutons-flèches au clic
arrowLeft.addEventListener("click", function()
	{slidingLeft()}
)
arrowRight.addEventListener("click", function()
	{slidingRight()}
)

//Changement image/texte/BP sur bannière
function slidingLeft(){
	if(compteur > 0){//si <- fonctionne
		eraseDot(iDot)
		compteur --
		iDot --
		actualizeBanner(compteur, iDot)
	}
	else{// sinon retour à l'autre extrêmité du carrousel
		eraseDot(iDot)
		compteur = slides.length-1
		iDot = slides.length
		actualizeBanner(compteur, iDot)
	}
}
function slidingRight(){
	if (compteur < slides.length-1){
		eraseDot(iDot)
		compteur ++
		iDot ++
		actualizeBanner(compteur, iDot)
	}
	else{
		eraseDot(iDot)
		compteur = 0
		iDot = 1
		actualizeBanner(compteur, iDot)
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




