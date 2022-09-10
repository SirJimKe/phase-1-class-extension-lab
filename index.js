class Polygon {
    constructor(array){
        this.array = array;
    }
    get countSides() {
        return this.array.length;
    }
    get perimeter() {
        return this.array.reduce((total, num) => total + num)
    }
}

class Triangle extends Polygon{
    get isValid() {
        let [a, b, c] = this.array;
        return (a + b > c && a + c > b && b + c > a)
    }
}

class Square extends Polygon {
    get isValid() {
        let [a, b, c, d] = this.array;
        return (a === b && b === c && c === d)
    }

    get area() {
        return this.array[0] ** 2;
    }
}
const rectangle = new Triangle([3, 4, 5])