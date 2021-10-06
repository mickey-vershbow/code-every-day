const listFormatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

class Person {
  constructor(first, last, age, gender, interests) {
    this.name = { first, last };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    const { first, last } = this.name;
    console.log(`Hi! I'm ${first} ${last}.`);
  }

  bio() {
    const { first, last } = this.name;
    if (this.interests) {
      let interestString = listFormatter.format(this.interests);
      if (this.gender === "Male") {
        console.log(
          `${first} is ${this.age} years old and his interests are ${interestString}.`
        );
      } else if (this.gender === "Female") {
        console.log(
          `${first} is ${this.age} years old and her interests are ${interestString}.`
        );
      } else if (this.gender === "Non-binary") {
        console.log(
          `${first} is ${this.age} years old and their interests are ${interestString}.`
        );
      } else {
        console.log(
          `${first} is ${this.age} years old and their interests are ${interestString}.`
        );
      }
    } else {
      console.log(`${first} is ${this.age} years old.`);
    }
  }
}

let person1 = new Person("test", "test", "29", "male", "");

// console.log(person1.bio());
// console.log(person1.greeting());

class Student extends Person {
  constructor(first, last, age, gender, interests, siblings) {
    super(first, last, age, gender, interests);
    this.siblings = siblings;
  }
}

let Mickey = new Student(
  "Mickey",
  "Vershbow",
  "30",
  "Female",
  ["drums", "coding", "gardening"],
  2
);

// console.log(Mickey.bio());
// console.log(Mickey.siblings);

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject) {
    super(first, last, age, gender, interests);
    this.subject = subject;
  }

  greeting() {
    const { first, last } = this.name;
    console.log(
      `Hi everyone, I'm ${first}, I'll be teaching your ${this.subject} class today.`
    );
  }
}

let Jen = new Teacher(
  "Jen",
  "Vershbow",
  "30",
  "Female",
  ["fitness", "cooking"],
  "fitness"
);

// console.log(Jen.bio());
// console.log(Jen.greeting());
