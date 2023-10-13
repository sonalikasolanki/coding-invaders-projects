function power(x, y) {
    let result = 1;
  
    for (let i = 0; i < y; i++) {
      result *= x;
    }
  
    return result;
  }
  
  console.log(power(2, 3)); 
  console.log(power(5, 2)); 
  console.log(power(10, 4)); 