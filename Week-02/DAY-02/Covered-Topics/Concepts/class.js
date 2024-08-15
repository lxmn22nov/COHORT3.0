/*
    CLASSES:
    - Introduced in ES6, 2015.
    - Class is not an object, instead blueprints for objects.
*/

// Syntax:

class Car {
    // always add constructor().
    constructor(name, model, manufactureYear) {
        this.name = name;
        this.model = model;
        this.manufactureYear = manufactureYear;
    }
    // Methods.
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

// The constructor method is called automatically when a new object is created.
// used to initialize object properties.
// If constructor were not defined, JS will add an empty constructor method.

class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area() {
        const area = this.width * this.height;
        return area;
    }
    perimeter() {
        const perimeter = 2 * (this.width + this.height);
        return perimeter;
    }
    print() {
        console.log(`Painting with color: ${this.color}`);
    }
}

const rect = new Rectangle(22, 11);
const area = rect.area();
const perimeter = rect.perimeter();
console.log("Area of rectangle:", area);
console.log("Perimeter of rectangle:", perimeter);