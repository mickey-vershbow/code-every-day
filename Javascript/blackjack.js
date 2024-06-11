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

// Card Functions
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, "jack", "queen", "king", "ace"];
const suits = ["clubs", "hearts", "spades", "diamonds"];
let deck1 = [];

const populateDeckOfCards = (deck) => {
  for (let value of values) {
    for (let suit of suits) {
      let newCard = new Card(value, suit);
      deck.push(newCard);
    }
  }
};

const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i + 1);
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
};

// Player Functions
const createPlayer = (name, hand, bankroll) => {
  return new Player(name, hand, bankroll);
};

// Game Functions

// Game Logic
let deckOne = [];

const runGame = () => {
  // Create and shuffle deck
  populateDeckOfCards(deckOne);
  shuffleDeck(deckOne);

  // Create players
  const player1 = createPlayer("Mickey", [], 100);
  const house = createPlayer("The House", [], 1000);
  console.log(player1, house);

  // Deal Cards
};

runGame();
