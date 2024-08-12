// Classes in JS:

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
    print() {
        console.log(`Painting with color: ${this.color}`);
    }
}

const rect = new Rectangle(22, 11);
const area = rect.area();
console.log("Area of rectangle:", area);


function random() {

}

let p = new Promise(random);
console.log(p);
