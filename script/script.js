$(document).ready(function () {

var playerTurn = 1;

var player1Cards = [];
var player2Cards = [];

var numberOfCardsGiven = 0;
var cardsGivenPerPlayer = 0;
var totalNumberOfCardsPerGame = 7;

var cardStack = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
                ];


$("#resetButton").on("click", reset);
$("#hitButton").on("click", cardToBoardAndPlayer);
$("#standButton").on("click", switchPlayerOrEnd);

alert("It is player 1's turn.");


function reset() {
  location.reload();
}


function switchPlayerOrEnd() {
  alert("You have reached the end of 7 cards or you have chosen to stand.");

  if (cardsGivenPerPlayer >= 2) {

    //  (playerTurn == 1) ? playerTurn = 2 : playerTurn = 0;
    if (playerTurn == 1) {
      playerTurn = 2;
      for (var i=0 ;i<totalNumberOfCardsPerGame ;i++) {
        $(".boxA").eq(i).hide();
      }
    }
    else {
      playerTurn = 0;
    }

    console.log("Current player is: " + playerTurn);


    if (playerTurn == 2) {
      alert("It is player 2's turn. Pls pass the terminal.");
      numberOfCardsGiven = totalNumberOfCardsPerGame;
      cardsGivenPerPlayer = 0;
      setTimeout( cardToBoardAndPlayer, 5000 );
    }
    else if (playerTurn == 0) {
      alert("Game has ended. Checking Winner.");
      checkWin();

    }


  }
  else{
      alert("Player " + playerTurn + " has not chosen 2 or more cards");
  }

}


function checkWin(){

  alert("Checking now.")
}






// Display the generated card to the board and remember the cards generated for each player
function cardToBoardAndPlayer() {

  var continueOrStop = checkAllBoxesFilled(cardsGivenPerPlayer);
  if (continueOrStop == false) {

    console.log("Continue");

    var printCard = checkDuplicateCard();

    if (playerTurn == 1) {
      player1Cards.push(printCard);
    }

    else if (playerTurn == 2) {
      player2Cards.push(printCard);
    }

    console.log("Player 1 cards are: " + player1Cards);
    console.log("Player 2 cards are: " + player2Cards);

    var cardLink = "css/" + [printCard] + ".jpg"
    console.log(cardLink);
    $("#box" + [numberOfCardsGiven] ).css( "background-image", "url( \" " + cardLink + " \" )" );

    // var boxLinkToBeAdded = document.querySelector("#box" + numberOfCardsGiven);
    // console.log(boxLinkToBeAdded);
    // boxLinkToBeAdded.style.backgroundImage = "url( \" cardLink \" )";  THIS IS NOT CORRECT


    // var currentBox = "#box" + [numberOfCardsGiven];
    // console.log(currentBox);
    numberOfCardsGiven ++;

    cardsGivenPerPlayer ++;
    console.log("Number of cards given for Player " + playerTurn + ": " + cardsGivenPerPlayer);

  }
  else {
    switchPlayerOrEnd();
  }



}



// check if all 7 boxes has been filled
function checkAllBoxesFilled(num) {
  var filledOrNot = (num == 7) ? true : false;
    return filledOrNot;
  }



// check if card has been allocated or duplicated
function checkDuplicateCard() {
  var cardNumber = generateCard();
  // console.log(cardNumber);


// ***??? test duplication as the game proceed and ability to call checkDuplicateCard() again!!!
  if (cardNumber !== cardStack[cardNumber] ) {
    console.log( "Card test loop if (ie. duplicate) " + cardStack[cardNumber] );
    checkDuplicateCard();
  }
  else {
    // console.log( "Card test loop else " + cardStack[cardNumber] );
    cardStack[cardNumber] = "X" ;
    // console.log( "Card test loop else " + cardStack[cardNumber] );
    console.log(cardStack);
  }
  return cardNumber;
}


// To generate random cards
function generateCard() {
  var card = Math.round( Math.random() * (51 - 0) + 0 );
  console.log(card);
  return card;
}






});
