class Animal {
  constructor(type, name, sound, legs) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.legs = legs;
  }
  bio() {
    console.log(
      `A ${this.name} has ${this.legs} legs and it's sound is ${this.sound}`
    );
  }
}

class Pig extends Animal {
  constructor(name, color) {
    super(name, color);
    this.type = "Pig";
    this.name = name;
    this.sound = "oink";
    this.legs = 4;
  }
}

let Wilbur = new Pig("Wilbur", "pink");
let Johnny = new Pig("Johnny", "brown");

console.log(Wilbur, Johnny);
