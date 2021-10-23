//////////////////////////////
// Question 1
//////////////////////////////

class Activity {
  constructor(amount) {
    this.amount = amount;
  }
  setAmount(value) {
    if (value <= 0) {
      return (value = false);
    } else {
      return (this.amount = value);
    }
  }
  getAmount() {
    return this.amount;
  }
}

class Refund extends Activity {
  constructor(amount, sender) {
    super(amount, sender);
    this.amount = amount;
    this.sender = sender;
  }
  setSender(sender) {
    this.sender = sender;
    return sender;
  }
  getSender() {
    return this.sender;
  }
}

//////////////////////////////
// Question 2
//////////////////////////////

// 'use strict'

// class Employee {
//     constructor(title){
//         this.title = title;
//     };
//     setTitle(title){
//         this.title = title;
//         return title;
//     };
//     getTitle(title){
//         return title;
//     };
// };

// class Engineer extends Employee {
//     constructor(title, isManager){
//         super(title);
//         this.title = title;
//         this.isManager = isManager;
//     }
// }

/////////////////////////////////////

