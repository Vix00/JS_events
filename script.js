//Fonctionnalité 1 :

var foot = document.getElementsByTagName("footer")[0];
foot.addEventListener("click", function() {
	console.log("Function 1 : " + "Clique"); //Affiche dans la console
	console.log("--------------------")
});



//Fontionnalité 1-bis :

var foot = document.getElementsByTagName("footer")[0];
let count = 1;
if (foot.addEventListener("click",function() { //Ajout du compteur 
	console.log("Function 1 bis : " + `Clic n°${count}`); //Affiche dans la console avec le compteur
	count++; //Incrémente
	console.log("--------------------")
}));



//Fonctionnalité 2 :

var btn = document.getElementsByClassName("navbar-toggler")[0]; //Sélection du bouton avec l'index
var navHead = document.getElementById("navbarHeader");

btn.addEventListener('click',function() {
	console.log("function 2 :" +" " + `${navHead.classList.toggle("collapse")}`); //Affiche sur le site et en console l'état de collapse
});



//Fonctionnalité 3 :

var firstCard = document.getElementsByClassName("card")[0]; //Sélection de la 1ère carte 
var firstEditBtn = document.getElementsByClassName("btn")[3]; //Sélection du 1er bouton

firstEditBtn.addEventListener("click",function(){
	firstCard.style = "color:red"; //Passe le texte en rouge de la 1ère carte
});



//Fonctionnalité 4 :

let secondCard = document.querySelectorAll(".card")[1] //Sélection de la 2ème carte 
let editButton2 = secondCard.querySelectorAll("button")[1] //Sélection du 2ème bouton
editButton2.addEventListener("click", function () {
  if (secondCard.style.color === "green") {
    secondCard.style.color = "";
  } else {
    secondCard.style.color = "green"; //Passe le texte en vert de la 2ème carte
  }
});



//Fonctionnalité 5 :

var link = document.getElementsByTagName("link")[0];
var header = document.getElementsByTagName("header")[0];

function BootstrapOff() { //On enlève Bootstrap via le double clic sur la navbar
	if (link.rel == "none") {
		link.rel = "stylesheet";
	}
	else {
		link.rel = "none";
	}
}
header.addEventListener("dblclick", BootstrapOff); //Permet d'annuler la suppression et relancer Bootstrap avec un nouveau double clic




//Fonctionnalité 6 :

let viewBtn = document.getElementsByClassName("btn-success"); //Récupération de tous les éléments 
let cardText = document.getElementsByClassName("card-text");
let cardImg = document.getElementsByClassName("card-img-top");
let cards = document.getElementsByClassName("card");

for (let x = 0; x < viewBtn.length; x++) {
	viewBtn[x].addEventListener("mouseover", function() {

//On définit la taille des cards selon l'action réalisée
		if (cardText[x].style.display == "none") {
			cardText[x].style.display = "block";
		}
		else {
			cardText[x].style.display = "none";
		};
		if (cardImg[x].style.width == "20%") {
			cardImg[x].style.width = "100%";
		}
	});
};

