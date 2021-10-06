class Shape {
    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    };

    calcPerimeter() {
        let perimeter = this.sideLength * this.sides;
        console.log(perimeter);
    };
};

class Square extends Shape {
    constructor(sideLength){
        super(sideLength);
        this.name = "square";
        this.sides = 4;
        this.sideLength = sideLength;
    };
    calcArea() {
        let area = this.sideLength * this.sideLength;
        console.log(area);
    };
};

let square1 = new Square(5);
let square2 = new Square(8);

console.log(square1.calcArea());
console.log(square2.calcArea());
console.log(square1.calcPerimeter());
console.log(square2.calcPerimeter());
console.log(square1.name);
console.log(square1)

