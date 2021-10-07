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
  attack() {
    let damage = this.strength - target.defense;
    

      console.log(
        `${player2} attacked ${player1} and did damage of ${player2.strength}. ${player1}'s health is now ${player1.health}.'`
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
  // function to change turns
  const changeTurn = () => {
    let activePlayer = player1;
    activePlayer = activePlayer == player1 ? player2 : player1;
  };
  // if player 1 turn, and won't inflict negative health
  if ((activePlayer = player1 && player1.strength - player2.defense > 0)) {
    player1.attack();
    logHealth();
    changeTurn();
    // if player1 damage would inflict negative health, player1 wins
  } else if (
    (activePlayer = player1 && player1.strength - player2.defense < 0)
  ) {
    player1.attack();
    player2.health = 0;
    console.log(`Game Over! ${player1} has won.`, logHealth());
    gameIsOver = true;
    // if player2 turn and won't inflict negative health
  } else if (
    (activePlayer = player2 && player2.strength - player1.defense > 0)
  ) {
    player2.attack();
    logHealth();
    changeTurn();
    // if player2 turn will inflict negative health, player2 wins
  } else if (
    (activePlayer = player2 && player2.strength - player1.defense < 0)
  ) {
    player2.attack();
    player1.health = 0;
    console.log(`Game Over! ${player2} has won.`, logHealth());
    gameIsOver = true;
  }
}

// log the winner if the loop breaks
