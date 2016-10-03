$(document).ready(function () {

var player1Turn = 1;
var player2Turn = 0;

var player1Cards = [];
var player2Cards = [];

var cardStack = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                  13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
                  26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
                  39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51
                ];



//Display the generated card to the board and remember the cards generated for each player
cardToBoardAndPlayer();



function cardToBoardAndPlayer() {

  var numberOfCardsGiven = 0;

  var printCard = checkDuplicateCard ();

  // // remove this hard code to 1 for testing!!! **************
  // printCard = 1;
  // console.log(printCard);

  player1Cards.push(printCard);
  console.log(player1Cards);

  var cardLink = "css/" + [printCard] + ".jpg"
  console.log(cardLink);

  // var test = "#box" + [numberOfCardsGiven];
  // console.log(test);

  $("#box" + [numberOfCardsGiven] ).css( "background-image", "url( \" " + cardLink + " \" )" );

  // var boxLinkToBeAdded = document.querySelector("#box" + numberOfCardsGiven);
  // console.log(boxLinkToBeAdded);
  // boxLinkToBeAdded.style.backgroundImage = "url( \" cardLink \" )";  THIS IS NOT CORRECT



  numberOfCardsGiven ++;


}



//check if card has been allocated or duplicated
function checkDuplicateCard() {
  var cardNumber = generateCard();
  // console.log(cardNumber);



// ***??? test duplication as the game proceed and ability to call checkDuplicateCard() again!!!
  if (cardNumber != cardStack[cardNumber] ) {
    // console.log( "Card test loop if" + cardStack[cardNumber] );
    checkDuplicateCard();
  }
  else {
    // console.log( "Card test loop else " + cardStack[cardNumber] );
    cardStack[cardNumber] = "X" ;
    // console.log( "Card test loop else " + cardStack[cardNumber] );
    // console.log(cardStack);
  }
  return cardNumber;
}


//Math random to generate non-duplicate cards for players
function generateCard() {
  var card = Math.round( Math.random() * (51 - 0) + 0 );
  // console.log(card);
  return card;
}






});
