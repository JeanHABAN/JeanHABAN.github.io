"use strict";
function area() { return this.side * this.side }

const square1 = //object litteral
{
    side: 5
};
square1.__proto__.area = area;

function Square(side) { //constructor function
    this.side = side;
}
Square.prototype.area = area;

class Square2 { //class syntax
    constructor(side) {
        this.side = side;
    }
    area() { return this.side * this.side };
}//IMPLEMENTATION NEEDED

console.log("expect 25: ", square1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(square1).length);
const constSquare1 = new Square(7);
console.log("expect 49: ", constSquare1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);
const classSquare = new Square2(10);
console.log("expect 100: ", classSquare.area());
console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length)

/**
 * In this task we provide you with the start of a definition for a Shape 
 * class. It has three properties: name, sides, and sideLength. 
 * This class only models shapes for which all sides are the same length, 
 * like a square or an equilateral triangle.

We'd like you to:

Add a constructor to this class. The constructor takes arguments for the name, 
sides, and sideLength properties, and initializes them.
Add a new method calcPerimeter() method to the class, which calculates its
 perimeter (the length of the shape's outer edge) and logs the result to the console.
Create a new instance of the Shape class called square. Give it a name of square and a sideLength of 5.
Call your calcPerimeter() method on the instance, to see whether it logs the calculation 
result to the browser's console as expected.
Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
Call triangle.calcPerimeter() to check that it works OK.
 */

class Shape {
    name;
    sides;
    sideLength;
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        console.log(`${this.sides * this.sideLength} "perimeter of" ${this.name}`);
    }
}
const square = new Shape("square", 4, 5);
square.calcPerimeter();
const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();

/**
 * Next we'd like you to create a Square class that inherits from Shape, and adds a calcArea() method 
 * that calculates the square's area. Also set up the constructor so that the name property of 
 * Square object instances is automatically set to square, and the sides property is automatically 
 * set to 4. When invoking the constructor, you should therefore just need to provide the sideLength property.

Create an instance of the Square class called square with appropriate property values, 
and call its calcPerimeter() and calcArea() methods to show that it works OK.
 */
class Square3 extends Shape {
    constructor(name, sides, sideLength) {
        super(name, sides, sideLength);
    }

    calcArea() {
        console.log(`${this.sides * this.sideLength} "perimeter of" ${this.name}`);
    }
}
const squares = new Square3("square", 4, 4);
squares.calcArea();

//Encapsulation

class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

//Inheritance and Encapsulation
//Private data properties must be declared in the class declaration, and their names start with #

class Student extends Person {
    #year;
    constructor(name, year) {
        super(name);
        this.#year = year;
    }
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }
    canStudyArchery() {
        return this.#year > 1;
    }
}

const summers = new Student('Summers', 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

//summers.#year; // SyntaxError because year is private can not be accessed outside of class

//Private methods

class Example {
    somePublicMethod() {
      this.#somePrivateMethod();
    }
  
    #somePrivateMethod() {
      console.log('You called me?');
    }
  }
  
  const myExample = new Example();
  
  myExample.somePublicMethod(); // 'You called me?'
  
  //myExample.#somePrivateMethod(); // SyntaxError because a method is private no way to be accessed outside of class

  function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user = {
      name: "John",
      ref: this
    };
    
    console.log("user is: ", user.ref.name)
    console.log("user.ref: ", user.ref)