//write a class to calculate the Uber price.

class uberCalculator {
  constructor(distance) {
    this.distance = distance;
    this.price = distance * 18;
  }
}

var cost = new uberCalculator(20);
console.log(cost);
