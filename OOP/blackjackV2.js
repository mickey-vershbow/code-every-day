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
let player1 = new Player("Mickey", [], "100");
let house = new Player("The House", [], "1000");

//variable to start and end the game
let gameIsOver = false;

// game loop
while (!gameIsOver) {
  // prompt user for name
  const playerName = prompt("What is your name?");
  player1.name = playerName;
  console.log(`Hey there, ${playerName}.`);
  const gamePrompt = prompt("Would you like to play a round? Y/n");
  if(gamePrompt === "Y"){
    // deal cards
    player1.hand.push(deck1.deal(), deck1.deal());
    house.hand.push(deck1.deal(), deck1.deal());
    console.log("Player 1: ", player1.hand);
    console.log("The House: ", house.hand);
    // sum cards
    console.log(`Your cards sum to ${player1.sum()}, and the house cards sum to ${house.sum()}`);
    let dealPrompt = prompt("Would you like to (d)eal or (q)uit?")
    if(dealPrompt === "d"){
      //deal card, sum cards, prompt
      player1.hand.push(deck1.deal());
      console.log("Player 1: ", player1.hand);
      console.log(
        `Your cards sum to ${player1.sum()}, and the house cards sum to ${house.sum()}`
      );
    } else {
      gameIsOver = true;
    }
  } else {
    // quit game
    gameIsOver = true;
  }


  // quit loop
  gameIsOver = true;
}
