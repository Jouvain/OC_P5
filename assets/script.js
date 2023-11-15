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

let compteur = 0
//récupération d'éléments
const arrowLeft = document.querySelector("#banner .arrow_left")
const picture = document.querySelector(".banner-img")
const blurb = document.querySelector("#banner p")
const arrowRight = document.querySelector("#banner .arrow_right")
const tableauDot = [] 
let dots = document.querySelector(".dots")
//récupération des valeurs // à intégrer en fonction
let completionImage = slides[compteur].image 
let completionTexte = slides[compteur].tagLine
// variable pour stock d'élements à créer/modifier
let dot


//mise en place des BP
slides.forEach(() =>
	{dot = document.createElement("div")
	dots.append(dot)
	dot.classList.add("dot")
	dot.addEventListener("click", function(event)
		{bulletChange(event.target)})
	tableauDot.push(dot)}
)
tableauDot[0].classList.add("dot_selected")

//Déclenchement des boutons-flèches au clic
arrowLeft.addEventListener("click", function(event)
	{sliding(event.target)}
)
arrowRight.addEventListener("click", function(event)
	{sliding(event.target)}
)




function bulletChange(evenement){
	tableauDot[compteur].classList.remove("dot_selected")
	compteur = tableauDot.indexOf(evenement)
	actualizeBanner(compteur)
	tableauDot.forEach(() =>
		{dot.classList.remove("dot_selected")}
	)
	evenement.classList.add("dot_selected")
}

function sliding(client){
	tableauDot[compteur].classList.remove("dot_selected")
	//client == arrowRight ? Right() : Left()
	if(client == arrowRight)
		{compteur < slides.length-1 ? compteur++ : compteur = 0}
	else
		{compteur > 0 ? compteur -- : compteur = slides.length-1}
	actualizeBanner(compteur)
}

function actualizeBanner(compteur){
	completionImage = slides[compteur].image
	completionTexte = slides[compteur].tagLine
	picture.setAttribute("src", "./assets/images/slideshow/"+completionImage)
	blurb.innerHTML = completionTexte
	tableauDot[compteur].classList.add("dot_selected")
}

