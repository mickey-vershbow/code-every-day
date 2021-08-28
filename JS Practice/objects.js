//! change the copied object properties without changing the original object

const a = {
  foo: "bar",
  fizz: "buzz",
};

const b = { ...a };
b.fizz = "weee";

console.log(b, a);

//! check for object and value equality

console.log(a === b);

// object value equality
function isEquivalent(a, b) {
  // create array of property names
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different, objects are not equal
  if (aProps.length != bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];

    // If values of same property are not the same, objects are not equal
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it to this point, objects are equal
  return true;
}

console.log(isEquivalent(b, a));

//! What if we have nested loops, recursion??
// object value equality
function isEqual(a,b) {
    return JSON.stringify(a) === JSON.stringify(b);
}

console.log(isEqual(b, a)) // 
