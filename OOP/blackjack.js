// Classes

// Card class
class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

// Player class
class Player {
  constructor(name, hand, bankroll) {
    this.name = name;
    this.hand = hand;
    this.bankroll = 100;
  }
}

// Cards
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["Hearts", "Spades", "Clubs", "Aces"];

// Create Deck
const createDeck = () => {
  let deck = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let card = new Card(values[j], suits[i]);
      deck.push(card);
    }
  }
  console.log(deck);
};

createDeck();
