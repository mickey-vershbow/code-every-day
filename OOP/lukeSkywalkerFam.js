class Person {
  constructor(name, relation) {
    this.name = name;
    this.relation = relation;
  }
}

let DarthVader = new Person("Darth Vader", "father");
let Leia = new Person("Leia", "sister");
let Han = new Person("Han", "brother-in-law");
let R2D2 = new Person("R2D2", "droid");

let Luke = {
  firstName: "Luke",
  lastName: "Skywalker",
};

const relationToLuke = (person) => {
  console.log(`${Luke.firstName}, I am your ${person.relation}`);
};

console.log(relationToLuke(DarthVader), relationToLuke(R2D2));
