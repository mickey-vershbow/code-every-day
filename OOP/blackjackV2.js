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
  sum() {
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
    let sumHand = Number(this.hand[0].value) + Number(this.hand[1].value);
    return sumHand;
  }
  winner(target) {}
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
// CREATE DECK
let deck1 = new Deck();

//create players
let player1 = new Player("Mickey", [], 100);
let house = new Player("The House", [], 1000);

//variable to start and end the game
let gameIsOver = false;
// FUNCTION TO DETERMINE WINNER
const winner = () => {
  if (
    player1.sum() === 21 ||
    (player1.sum() > house.sum() && player1.sum() <= 21)
  ) {
    player1.bankroll += 10;
    console.log(
      `You won! Your total is ${player1.sum()} and The House' total is ${house.sum()}. Your bankroll is now $${
        player1.bankroll
      }.`
    );
  } else {
    player1.bankroll -= 10;
    console.log(
      `You lost! The house total is $${house.sum()} and The House' total is ${player1.sum()}.Your bankroll is now $${
        player1.bankroll
      }.`
    );
  }
  gameIsOver = true;
};

// game loop
while (!gameIsOver) {
  // prompt user for name
  const playerName = prompt("What is your name?");
  player1.name = playerName;
  console.log(`Hey there, ${playerName}. Let's play a round!`);

  // start game, deal cards
  player1.hand.push(deck1.deal(), deck1.deal());
  house.hand.push(deck1.deal(), deck1.deal());
  console.log("Player 1: ", player1.hand);
  console.log("The House: ", house.hand);

  // prompt for deal or quit
  let dealPrompt = prompt("Would you like to (d)eal or (q)uit?");

  // DEAL CARD
  if (dealPrompt === "d") {
    // deal player another card
    player1.hand.push(deck1.deal());
    console.log("Player 1: ", player1.hand);
    console.log("The House: ", house.hand);

    // If player hand is less than 21, prompt them to deal or quit, else determine winner and quit
    if (player1.sum() < 21 && house.sum() != 21) {
      let dealPrompt2 = prompt(
        "Would you like to (d)eal another card or (q)uit?"
      );

      // if player chooses to deal another card
      if (dealPrompt2 === "d") {
        player1.hand.push(deck1.deal());
        console.log("Player 1: ", player1.hand);
        console.log("The House: ", house.hand);
        // DETERMINE WINNER
        winner();

        // PLAYER CHOOSES TO QUIT
      } else {
        winner();
      }

      // CARDS ARE OVER 21, OR HOUSE HAS 21
    } else {
      winner();
    }

    // PLAY ANOTHER GAME?
    // let gamePrompt = prompt("Would you like to play another round? Y/n");
    // if (gamePrompt === "Y") {
    //   player1.hand = [];
    //   house.hand = [];
    //   player1.hand.push(deck1.deal(), deck1.deal());
    //   house.hand.push(deck1.deal(), deck1.deal());
    //   console.log("Player 1: ", player1.hand);
    //   console.log("The House: ", house.hand);
    //   // LOGIC FOR PLAYING ANOTHER GAME
    // } else {
    //   gameIsOver = true;
    // }

    // PLAYER CHOOSES TO QUIT AFTER FIRST DEAL PROMPT
  } else {
    winner();
  }
}
