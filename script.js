// 1. lorsque l'utilisateur va cliquer sur le footer, tu vas afficher le mot "clique" en console.

const theFooter = document.getElementsByTagName('footer');

let x = 1

theFooter[0].addEventListener('click', function(){

    // on incrémente de 1 à chaque clic
    // console.log('clique')
    console.log(`Clic numéro ${x}`);
    x++;
});

// 2. Rajouter la classe collapse et l'enlever si on clique sur le menu hamburguer

let theNavBar = document.getElementById('navbarHeader');
let theNavButton = document.getElementsByTagName('button');

theNavButton[0].addEventListener('click', function(){
    theNavBar.classList.toggle('collapse')
});

// 3. En cliquant sur Edit de la premiere card, le texte doit s'afficher en rouge:

let theFirstCard = document.getElementsByClassName("card")[0];
let theFirstCardButton = theFirstCard.getElementsByTagName("button");
function cardTextRed(){ 
	theFirstCard.style.color = "red";
}
theFirstCardButton[1].addEventListener("click", cardTextRed);

//  4 : En cliquant sur Edit, le texte devient vert. En cliquant une deuxieme fois il redevient comme avant.

let theSecondCard = document.getElementsByClassName("card")[1];
let theSecondCardButton = theSecondCard.getElementsByTagName("button");
let textColorStatus = false;
function TextGreen(){
	if (theSecondCard.style.color === "green") {
		theSecondCard.style.color = "";
	}
	else {
		theSecondCard.style.color = "green";
	}
}
theSecondCardButton[1].addEventListener("click", TextGreen);

// 5 En double cliquant sur la navbar du haut, la page doit s'afficher sans bootstrap (réversible):

document.querySelector("header").addEventListener("dblclick", function(){
  if (document.querySelector("link").disabled === false) {
    document.querySelector("link").disabled = true ;
  } else {
    document.querySelector("link").disabled = false ;
  }
});

// 6 En passant sur le bouton view : on diminue la taille de la card de 20 % (réversible) :

let theCards = document.getElementsByClassName("card");

for (let count = 0; count < 6; count++) {
	let cardText = theCards[count].getElementsByClassName("card-text")[0];
	let cardImage = theCards[count].getElementsByClassName("card-img-top")[0];
  let cardButtonView = theCards[count].getElementsByTagName("button")[0];
  
	function miniCard() {
		if (cardImage.style.width === "20%") {
			cardImage.style = "";
			cardText.classList.toggle("collapse");
		}
		else {
			cardImage.style.width = "20%";
			cardText.classList.toggle("collapse");
		}
	}
	cardButtonView.addEventListener("mouseover", miniCard);
}

// 7. En cliquant sur ==> on inverse l'ordre des cards :

let navCardButton1 = document.getElementsByClassName("my-2")[1];
let cardsPosition = document.getElementsByClassName("row")[1];
function lastCardGetsFirst() {
	cardsPosition.insertBefore(cardsPosition.children[5], cardsPosition.children[0]);
}
navCardButton1.addEventListener("click", lastCardGetsFirst);