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

const fs = require("fs");
const _ = require("lodash");
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let ws;
let input = "";
process.stdin.on("data", (inputStdin) => (input += inputStdin));
process.stdin.on("end", () => {
  ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  input
    .replace(/\s*$/, "") // trim
    .split("\n")
    .map((str) => str.replace(/\s*$/, "")) // trim again
    .filter((str) => str.length > 1) // remove empty strings
    .map((str) => str.split(",")) // parse command and options
    .map(([cmd, ...opts]) => {
      // call coresponding function
      switch (cmd) {
        case "add":
          return add(...opts);
        case "remove":
          return remove(...opts);
        case "move":
          return move(...opts);
        case "count":
          return writeLine(count(...opts));
        case "print":
          return print();
        default:
          return;
      }
    });

  ws.end();
});

// helper for printing new lines to correct write stream
function writeLine(str) {
  ws.write(str + "\n");
}

let orgChart = {};

/**
 * @param {String} employeeId
 * @param {String} name
 * @param {String} managerId
 */
function add(employeeId, name, managerId) {
  orgChart[employeeId] = employeeId;
  orgChart[employeeId] = {};
  orgChart[employeeId].name = name;
  orgChart[employeeId].managerId = managerId;
}

/**
 * @param {String} employeeId
 * @param {String} newManagerId
 */
function move(employeeId, newManagerId) {
  // implement me
}

/**
 * Return the count, don't worry about writing the value to console
 * @param {String} employeeId
 * @returns {Int} number of employees that report up to a given employee
 */
function count(employeeId) {
  // implement me
}

/**
 * @param {String} employeeId
 */
function remove(employeeId) {
  // implement me
}

/**
 * Call writeLine(str) to print a single line
 */
function print() {
  const keys = Object.keys(orgChart);
  let str = "";
  for (const key of keys) {
    let name = orgChart[key].name;
    str += `\n ${name} [${key}] `;
  }

  writeLine(str);
}
