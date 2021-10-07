//! Classic streetfighter game where two fighters battle until one wins.
//////////////////////////////////////

/////////////////////
//Dependencies
/////////////////////
// Import 'prompt' node module and give users ability to exit
const prompt = require("prompt-sync")({ sigint: true });

/////////////////////////
// Create fighter class.
/////////////////////////
// Each fighter should have name, health, strength, and defense properties. Health starts at 10, they lose when it reaches 0. Strength starts at a random number between 5-10. Defense starts at random number between 5-10
// Fighter class should also have an Attack method. When one fighter attacks the other, the amount of damage dealt should be equivalent to the attacker's strength. After an attack, log details. Don't let damage go into negative.

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class Fighter {
  constructor(name) {
    this.name = name;
    this.health = 10;
    this.strength = randomNum(5, 10);
    this.defense = randomNum(5, 10);
  }
  attack(target) {
    let damage = this.strength - target.defense;
    if (damage <= 0) {
      damage = 0;
    }
    target.health -= damage;
    if (target.health <= 0) {
      target.health = 0;
    }
    console.log(
      `${this.name} attacked ${target.name} and did ${damage} damage. ${target.name}'s health is now ${target.health}.'`
    );
  }
}

////////////////////
// Write game logic
////////////////////

// Create variable to start and end the game
let gameIsOver = false;

// function to log fighter health
const logHealth = () => {
  console.log(
    `${player1} health: ${player1.health}; ${player2} health: ${player2.health}`
  );
};

let player1;
let player2;

// Generate Fighters
let runLoop = true;
while (runLoop) {
  player1 = new Fighter("Ryu");
  player2 = new Fighter("Ken");
  console.log(player1);
  console.log(player2);
  if (
    player1.strength > player2.defense &&
    player2.strength > player2.defense
  ) {
    runLoop = false;
  }
}

// const startGamePrompt = () => {
//   const gamePrompt = prompt("Would you like to start another game? Y/n");
//   if (gamePrompt == "Y") {
//     gameIsOver = false;
//   } else {
//     gameIsOver = true;
//   }
// };

// Create a loop that does the following: the two fighers attack each other, and if one fighter's health hits 0, the loop should break

let activePlayer = player1;

while (!gameIsOver) {
  // function to change turns
  const changeTurn = () => {
    activePlayer = activePlayer == player1 ? player2 : player1;
  };
}

// log the winner if the loop breaks
