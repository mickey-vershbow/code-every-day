////////////////////////////////////////////
// Traditional JS classes and constructors
///////////////////////////////////////////

// use Constructor function to create Person class. Constructor functions should be capitalized.

// function Bandmember(first, last, instrument) {
//     this.name = {
//         first: first,
//         last: last
//     };
//     this.instrument = instrument;
//     this.bio = function() {
//         console.log(`${this.name.first} ${this.name.last} is the ${this.instrument}.`);
//     };
//     this.greeting = function() {
//         console.log(`Hi! I'm ${this.name.first} ${this.name.last} and I'm the ${this.instrument}`);
//     };
// };

// let Paul = new Bandmember('Paul', 'McCartney', 'bassist and vocalist');
// let John = new Bandmember('John', 'Lennon', 'rhythm guitarist and vocalist');
// let George = new Bandmember('George', 'Harrison', 'lead guitarist');
// let Ringo = new Bandmember('Ringo', 'Starr', 'drummer');

// console.log(Paul.instrument);
// console.log(George['instrument']);
// Ringo.greeting();
// John.bio();

// let George2 = Object.create(George);
// console.log(George2);
// George2.greeting();
// George2.name.first = 'George2';
// George2.greeting();

///////////////////////
// Modern Syntax (under the hood, still prototypal inheritance)
///////////////////////

class Person {
  constructor(first, last, gender, interests) {
    this.name = {
      first: first,
      last: last,
    };
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first} ${this.name.last}.`);
  }

  bio() {
    console.log(`${this.name.first}'s interests are ${this.interests}'`);
  }
}

class Bandmember extends Person {
  constructor(first, last, gender, interests, instrument) {
    super(first, last, gender, interests);
    //initializes 'this' keyword by calling the parent constructor. Passing it arguments from parent class constructor will also initialize the parent class properties in our subclass, thereby inheriting it

    //instrument is specific to bandmembers
    this.instrument = instrument;
  }
  get instrument() {
    return this._instrument;
  }

  set instrument(newInstrument) {
    this._instrument = newInstrument;
  }
}

let Paul = new Bandmember("Paul", "McCartney", "male", [
  "fancy things",
  "wives",
  "fame",
]);
let John = new Bandmember("John", "Lennon", "male", [
  "peace and love",
  " karma",
  " yoko",
]);
let George = new Bandmember("George", "Harrison", "male", [
  "hinduism",
  "sitar",
  "spirituality",
]);
let Ringo = new Bandmember("Ringo", "Starr", "male", [
  "who knows",
  "hanging out",
]);

Ringo.greeting();
John.bio();

class Crewmember extends Person {
  constructor(first, last, gender, interests, job) {
    super(first, last, gender, interests);
    this.job = job;
  }
  greeting() {
    console.log(
      `Hi! I'm ${this.name.first} ${this.name.last} and I'm the ${this.job}`
    );
  }
}

let Dave = new Crewmember(
  "Dave",
  "Smith",
  "male",
  ["burning man", " video games"],
  "Lighting Tech"
);

Dave.greeting();
Dave.bio();
