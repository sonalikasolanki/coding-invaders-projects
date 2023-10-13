function checkDivisibility(num1, num2) {
    if (num1 % num2 === 0) {
      return "Completely divisible!";
    } else {
      return "Not divisible!";
    }
  }
  console.log(checkDivisibility(15, 3)); 
  console.log(checkDivisibility(12, 5)); 