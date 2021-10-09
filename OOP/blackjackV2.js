const { performance, PerformanceObserver } = require("perf_hooks");
// create Player class
class Player {
  constructor(name, hand, bankroll) {
    this.name = name;
    this.bankroll = bankroll;
    this.hand = hand;
  }
}

//Create deck, shuffle, deal

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
        this.deck.push(`${VALUES[value]} of ${SUITS[suit]}`);
      }
    }
  }
  shuffle() {
    // destructure deck
    // create a counter, a tmp location for counter, and a randomNum. Swap locations of counter and randomNum.
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

// var startTime = performance.now();
let deck1 = new Deck();
// let endTime = performance.now();
// console.log(`Call to create deck took ${endTime - startTime} milliseconds`);

///////////////////////
// Game Logic
//////////////////////

let player1 = new Player("Mickey", [], "100");
let house = new Player("The House", [], "1000");

let gameIsOver = false;
while (!gameIsOver) {
  // deal cards
  player1.hand.push(deck1.deal(), deck1.deal());
  house.hand.push(deck1.deal(), deck1.deal());
  // console.log(
  //   "Player1 hand is " + player1.hand + ", and The House hand is " + house.hand
  // );
  console.log("Player 1: ", player1.hand);
  console.log("The House: ", house.hand);
  // determine winner

  if (player1.hand[0] + player1.hand[1] >= house.hand[0] + house.hand[1]) {
    console.log(
      "Player 1 wins with a total of " + (player1.hand[0] + player1.hand[1])
    );
  } else {
    console.log(
      "House wins with a total of " + (house.hand[0] + house.hand[1])
    );
  }

  gameIsOver = true;
}
