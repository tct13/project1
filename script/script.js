$(document).ready(function () {


// Global variables to control the game flow, remember the players' allocated cards
// and array to compute help compute win/lose
var playerTurn = 1;
var numberOfCardsGiven = 0;
var cardsGivenPerPlayer = 0;
var totalNumberOfCardsPerGame = 7;

var player1Cards = [];
var player2Cards = [];

var cardStack = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
                ];

var cardPoints = [ 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
                  0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
                  0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
                  0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10
                ];

// Event listeners for the 3 buttons
$("#resetButton").on("click", reset);
$("#hitButton").on("click", cardToBoardAndPlayer);
$("#standButton").on("click", switchPlayerOrEnd);

// To mark the start of the game through the alert below
alert("It is player 1's turn.");



// To check the winning function at the end of the game
function checkWin() {

  var player1Points = 0;
  var player2Points = 0;

  $(".boxA").show();

// Deal with double Ace or 10/J/Q/K plus A for the first 2 cards

if (player1Cards.length == 2 || player2Cards.length == 2) {

  for (var i=0; i<2; i++) {
    // if (player1Cards[1] == 0 || player1Cards[1] == 13 || player1Cards[1] == 26 || player1Cards[1] == 39) {
    //   var gotAce = 1;
    // }


  }

      // console.log("player"+[i]+Cards1)
      // if (player[i]Cards1 == )



      console.log("xxxx")
    }





// Deal with Ace card points below

  for (var i=0; i<player1Cards.length; i++) {
    var onePoints = 0;
    // console.log(player1Cards.length);
    console.log("Player 1 card :" + player1Cards[i]);
    onePoints = cardPoints[ player1Cards[i] ];
    console.log("Player 1 card points: " + onePoints);
    player1Points += onePoints;
    console.log("Player 1 total card points: " + player1Points);
  }

  for (var j=0; j<player2Cards.length; j++) {
    var twoPoints = 0;
    // console.log(player2Cards.length);
    console.log("Player 2 card :" + player2Cards[j]);
    twoPoints = cardPoints[ player2Cards[j] ];
    console.log("Player 2 card points: " + twoPoints);
    player2Points += twoPoints;
    console.log("Player 2 total card points: " + player2Points);
  }


// Deal with >21 total points below



  alert("Pls reload game by pressing the reset button.");

}












// To restart by reloading the webpage
function reset() {
  location.reload();
}



// To switch from player 1 to 2 or mark the end of the game when all players stand
function switchPlayerOrEnd() {
  alert("You have reached the end of 7 cards or you have chosen to stand.");

  if (cardsGivenPerPlayer >= 2) {

    if (playerTurn == 1) {
      playerTurn = 2;
      $(".boxA").hide();
    }
    else {
      playerTurn = 0;
    }

    console.log("Current player is: " + playerTurn);

    if (playerTurn == 2) {
      alert("It is player 2's turn. Pls pass the terminal.");
      numberOfCardsGiven = totalNumberOfCardsPerGame;
      cardsGivenPerPlayer = 0;
      setTimeout( cardToBoardAndPlayer, 2000 );
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












// To display the generated card to the board and remember the cards generated for each player
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



// To check if all 7 boxes has been filled and if yes, mark the end of game
function checkAllBoxesFilled(num) {
  var filledOrNot = (num == 7) ? true : false;
    return filledOrNot;
  }



// To check if card has been allocated or duplicated
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
