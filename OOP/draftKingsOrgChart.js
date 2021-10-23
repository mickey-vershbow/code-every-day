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
