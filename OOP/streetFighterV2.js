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

// Variables
let player1;
let player2;
let gameIsOver = false;
let runLoop = true;
let player1Turn = true;

// Generate Fighters
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

while (!gameIsOver) {
  // run the game
  if (player1Turn) {
    player1.attack(player2);
  } else {
    player2.attack(player1);
  }

  player1Turn = !player1Turn;

  // quit the loop if either player health hits 0
  if (player1.health == 0) {
    console.log(`Player2 has won!`);
    gameIsOver = true;
  } else if (player2.health === 0) {
    console.log(`Player1 has won!`);
    gameIsOver = true;
  }
}
