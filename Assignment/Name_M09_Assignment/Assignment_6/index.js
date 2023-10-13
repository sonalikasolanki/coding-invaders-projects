// Subtask 1: Ask user to enter 1 for circle or 2 for square
let option = parseInt(prompt('Enter 1 for Circle or 2 for Square'));

// Subtask 2: Create switch case for circle and square
switch (option) {
  case 1:
    // Subtask 5: Ask user for radius of circle
    let circleRadius = parseFloat(prompt('Enter the radius of circle'));
    formCircle(circleRadius); // Call formCircle method
    break;
  case 2:
    // Subtask 6: Ask user for side of square
    let squareSide = parseFloat(prompt('Enter the side of square'));
    formSquare(squareSide); // Call formSquare method
    break;
  default:
    alert('Enter valid option');
}

// Subtask 3: Calculate area and perimeter of circle
function formCircle(radius) {
  let circle = {
    radius: radius,
    calculatePerimeter: function() {
      return 2 * Math.PI * this.radius;
    },
    calculateArea: function() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  };

  // Call calculatePerimeter and calculateArea methods
  let perimeter = circle.calculatePerimeter();
  let area = circle.calculateArea();
  console.log('Perimeter of circle is ' + perimeter);
  console.log('Area of circle is ' + area);
}

// Subtask 4: Calculate area and perimeter of square
function formSquare(side) {
  let square = {
    side: side,
    calculatePerimeter: function() {
      return 4 * this.side;
    },
    calculateArea: function() {
      return Math.pow(this.side, 2);
    }
  };

  // Call calculatePerimeter and calculateArea methods
  let perimeter = square.calculatePerimeter();
  let area = square.calculateArea();
  console.log('Perimeter of square is ' + perimeter);
  console.log('Area of square is ' + area);
}
