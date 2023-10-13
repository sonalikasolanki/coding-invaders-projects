function findSecondLargestNumber(numbers) {
    if (numbers.length < 2) {
      throw new Error('Array should contain at least two numbers');
    }
  
    let max = Math.max(numbers[0], numbers[1]);
    let secondMax = Math.min(numbers[0], numbers[1]);
  
    for (let i = 2; i < numbers.length; i++) {
      if (numbers[i] > max) {
        secondMax = max;
        max = numbers[i];
      } else if (numbers[i] > secondMax && numbers[i] < max) {
        secondMax = numbers[i];
      }
    }
  
    return secondMax;
  }
  const numbers1 = [2, 3, 5, 9, 11, 23];
  console.log(findSecondLargestNumber(numbers1)); 
  
  const numbers2 = [2, 4, 7];
  console.log(findSecondLargestNumber(numbers2)); 
    