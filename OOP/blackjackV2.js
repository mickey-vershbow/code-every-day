////////////////////////
// measure runtime
const { performance, PerformanceObserver } = require("perf_hooks");
// node prompt-sync module
const prompt = require("prompt-sync")();

//////////////
// CLASSES
/////////////

// create Player class
class Player {
  constructor(name, hand, bankroll) {
    this.name = name;
    this.bankroll = bankroll;
    this.hand = hand;
  }
  // sum cards
  cardSum() {
    // convert faces to numbers
    for (let i = 0; i < this.hand.length; i++) {
      if (this.hand[i].value === "Ace") {
        this.hand[i].value = "11";
      } else if (
        this.hand[i].value === "Jack" ||
        this.hand[i].value === "Queen" ||
        this.hand[i].value === "King"
      ) {
        this.hand[i].value = "10";
      }
    }
    // for loop to convert "5" to 5 and sum each number in array
    let sum = 0;
    for (let i = 0; i < this.hand.length; i++) {
      this.hand[i].value = Number(this.hand[i].value);
      sum += this.hand[i].value;
    }
    return sum;
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

//Create deck, shuffle, deal. When a new deck is created, it gets shuffled automatically
class Deck {
  constructor() {
    this.deck = [];
    this.reset();
    this.shuffle();
  }
  reset() {
    this.deck = [];
    const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const VALUES = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "Jack",
      "Queen",
      "King",
      "Ace",
    ];
    for (let suit in SUITS) {
      for (let value in VALUES) {
        // this.deck.push(`${VALUES[value]} of ${SUITS[suit]}`);
        let card = new Card(SUITS[suit], VALUES[value]);
        this.deck.push(card);
      }
    }
  }

  shuffle() {
    const { deck } = this;
    let counter = deck.length,
      tmp,
      i;

    while (counter) {
      i = Math.floor(Math.random() * counter--);
      let tmp = this.deck[counter];
      this.deck[counter] = this.deck[i];
      this.deck[i] = tmp;
    }
    return this;
  }
  deal() {
    return this.deck.pop();
  }
}

///////////////////////
// Game Logic
//////////////////////

// VARIABLES

// create deck
let deck1 = new Deck();
// create players
let player1 = new Player("Mickey", [], 100);
let house = new Player("The House", [], 1000);
// variable to start and end the game
let gameIsOver = false;

// FUNCTIONS

// Determine winner
const winner = () => {
  if (
    player1.cardSum() === 21 ||
    (player1.cardSum() <= 21 && player1.cardSum() > house.cardSum())
  ) {
    player1.bankroll += 10;
    console.log(
      `You won! Your total is ${player1.cardSum()} and The House' total is ${house.cardSum()}. Your bankroll is now $${
        player1.bankroll
      }.`
    );
  } else if (
    player1.cardSum() > 21 ||
    house.cardSum() === 21 ||
    (house.cardSum() > player1.cardSum() && house.cardSum() < 21)
  ) {
    player1.bankroll -= 10;
    console.log(
      `You lost! The House total is ${house.cardSum()} and your total is ${player1.cardSum()}. Your bankroll is now $${
        player1.bankroll
      }.`
    );
  }
  gameIsOver = true;
};

// Prompt to play another round after game ends
const anotherGamePrompt = () => {
  let gamePrompt = prompt("Would you like to play another round? Y/n ");
  if (gamePrompt === "Y") {
    gameLoop();
  } else {
    gameIsOver = true;
  }
};

/////////////////////////////////////////////////////////
// GAME LOOP -- will run when called below in "RUN LOOP"
////////////////////////////////////////////////////////

const gameLoop = () => {
  // clear hands, deal two new cards, start game
  player1.hand = [];
  house.hand = [];
  player1.hand.push(deck1.deal(), deck1.deal());
  house.hand.push(deck1.deal(), deck1.deal());
  console.log("Player 1: ", player1.hand);
  console.log("The House: ", house.hand);

  // prompt for deal or quit
  let dealPrompt = prompt("Would you like to (d)eal or (q)uit? ");

  // IF PLAYER CHOOSES TO DEAL CARD,
  if (dealPrompt === "d") {
    // deal player another card
    player1.hand.push(deck1.deal());
    console.log("Player 1: ", player1.hand);
    console.log("The House: ", house.hand);

    // If player hand is less than 21, prompt them to deal or quit, else determine winner and quit
    if (player1.cardSum() < 21 && house.cardSum() != 21) {
      let dealPrompt2 = prompt(
        "Would you like to (d)eal another card or (q)uit? "
      );

      // IF PLAYER CHOOSES TO DEAL ANOTHER CARD
      if (dealPrompt2 === "d") {
        player1.hand.push(deck1.deal());
        console.log("Player 1: ", player1.hand);
        console.log("The House: ", house.hand);
        // DETERMINE WINNER
        winner();
        // Prompt for another round
        anotherGamePrompt();

        // ELSE IF PLAYER CHOOSES TO QUIT AFTER dealPrompt2
      } else {
        winner();
        anotherGamePrompt();
      }

      // CARDS ARE OVER 21, OR HOUSE HAS 21
    } else {
      winner();
      anotherGamePrompt();
    }

    // IF PLAYER CHOOSES TO QUIT AFTER FIRST DEAL PROMPT
  } else {
    winner();
    anotherGamePrompt();
  }
};

//////////////////////
// RUN GAME
//////////////////////
while (!gameIsOver) {
  // prompt user for name
  const playerName = prompt("What is your name? ");
  player1.name = playerName;
  console.log(`Hey there, ${playerName}. Let's play a round!`);

  gameLoop();
}
