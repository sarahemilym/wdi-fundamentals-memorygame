console.log("JS file is connected to HTML! Woo!")

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";*/

var cards=["queen", "queen", "king", "king"];
var cardsInPlay=[];

/*if (cardTwo === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.')
}*/

var gameBoard = document.getElementById('game-board');

var isTwoCards = function() {
	if (this.getAttribute('data-card') === "king") {
		this.innerHTML = '<img src="images/my_king.png" alt="King of Spades" />';
	} else if (this.getAttribute('data-card') === "queen") { 
		this.innerHTML = '<img src="images/my_queen.png" alt="Queen of Spades" />';
	}
	cardsInPlay.push(this.getAttribute('data-card'));

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay)
		cardsInPlay = [];
	}
}

var createCards = function() {
	for(var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		gameBoard.appendChild(cardElement);
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
	}
};

var isMatch = function(cardsInPlay) {
	if (cardsInPlay[0]===cardsInPlay[1])  {
		confirm('match 🎊');	
	}
	for(var i = 0; i < cards.length; i++) {
		document.getElementsByClassName('card')[i].innerHTML = '';
	}
};

createCards();

