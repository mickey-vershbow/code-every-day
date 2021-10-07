// node prompt dependency
const prompt = require("prompt-sync")({ sigint: true });

// function to generate random num between 5-10
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// create fighter class
class Fighter {
  constructor(name) {
    this.name = name;
    this.health = 10;
    this.defense = randomIntFromInterval(5, 10);
    this.strength = randomIntFromInterval(5, 10);
  }
  //attack method
  attack(target) {
    let damage = this.strength - target.defense;
    if (damage <= 0) {
      damage = 0;
    }
    target.health -= damage;
    if (target.health < 0) {
      target.health = 0;
    }
    console.log(
      `${this.name} attacked ${target.name} and did damage of ${damage}. ${target.name}'s health is now ${target.health}.`
    );
  }
}

// define variables
let fighter1;
let fighter2;
let generateFighters = false;
let gameIsOver = false;
let fighter1Turn = true;

// prompt user to play a round
while (gameIsOver) {
  // get user input
  let userPrompt = prompt("Would you like to play a round?Y/n");
  if (userPrompt == "Y") {
    // generateFighters = true;
    gameIsOver = false;
  } else {
    gameIsOver = true;
  }
}


// create loop to generate fighters when game runs
while (generateFighters == true) {
  fighter1 = new Fighter("Ryu");
  fighter2 = new Fighter("Ken");
  if (
    fighter1.strength > fighter1.defense &&
    fighter2.strength > fighter1.defense
  ) {
    generateFighters = false;
  }
}

// game logic loop
while (!gameIsOver) {
  if (fighter1Turn) {
    fighter1.attack(fighter2);
  } else {
    fighter2.attack(fighter1);
  }
  fighter1Turn = !fighter1Turn;
  if (fighter1.health == 0) {
    console.log(`${fighter2.name} has won!`);
    gameIsOver = true;
  }
  if (fighter2.health == 0) {
    console.log(`${fighter1.name} has won!`);
    gameIsOver = true;
  }
}
