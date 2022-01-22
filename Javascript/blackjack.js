class Player {
  constructor(name, hand, bankroll) {
    this.name = name;
    this.hand = hand;
    this.bankroll = bankroll;
  }
}

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, "queen", "king", "ace"];
const suits = ["clubs", "hearts", "spades", "diamonds"];

const populateCards = () => {
  for (let value of value) {
    console.log(value);
  }
};
