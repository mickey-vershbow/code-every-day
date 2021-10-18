const func = require("./insertionSort");

test('func function exists', () => {
    expect(typeof func).toEqual('function');
});

test("Sorts list in ascending order", () => {
  expect(func(2, 4, 9, 14, 23, 7)).toBe(2, 4, 7, 9, 14, 23);
});
