function checkEvenOdd(numbers, callback) {
    numbers.forEach(number => {
      callback(number);
    });
  }
  
  function printEvenOdd(number) {
    if (number % 2 === 0) {
      console.log(number + ' is even.');
    } else {
      console.log(number + ' is odd.');
    }
  }
  
  let numbersArray = [2, 4, 6, 5, 8, 7, 1, 9, 39, 22, 13, 40, 55];
  
  checkEvenOdd(numbersArray, printEvenOdd);
  