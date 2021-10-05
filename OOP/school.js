const listFormatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first: first,
      last: last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first} ${this.name.last}.`);
  }

  bio() {
    return listFormatter.format(this.interests);
  }
}

