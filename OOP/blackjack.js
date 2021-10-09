// Classes

// Player class
class Player {
  constructor(name, hand, bankroll) {
    this.name = name;
    this.hand = hand;
    this.bankroll = 100;
  }
}

class Deck {
  constructor() {
    this.deck = [];

    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  shuffle() {
    const { deck } = this;
    let m = deck.length,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal() {
    return this.deck.pop();
  }
}

const deck1 = new Deck();
deck1.shuffle();
console.log(deck1.deck);
deck1.deal()
console.log(deck1.deck)
