class circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  getArea() {
    let area = this.radius ** 2 * Math.PI;
    return area;
  }
  getCircumference() {
    let circumference = 2 * Math.PI * this.radius;
    return circumference;
  }
}
var newCircle = new circle(20, "red");
console.log(
  `Circumference of given circle is ${newCircle.getCircumference().toFixed(4)}`
);
console.log(`Area of given circle is ${newCircle.getArea().toFixed(4)}`);
