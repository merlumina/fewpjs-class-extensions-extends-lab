class Polygon {
  constructor(sidesArray) {
    //sidesArray.forEach((side, index) => this['side' + index] = sidesArray[index])
    this.sides = sidesArray;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((p, side) => p + side);
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (this.countSides !== 3) return;
    return this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0];
  }

}

class Square extends Polygon {
  get area() {
    return this.sides[0] ** 2;
  }

  get isValid() {
    return this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2] && this.sides[2] == this.sides[3];
  }
}