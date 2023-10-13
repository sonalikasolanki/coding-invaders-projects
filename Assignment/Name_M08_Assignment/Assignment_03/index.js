function findMinimum(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
let num1 = 4;
let num2 = 9;
let minimum = findMinimum(num1, num2);
  console.log(minimum);