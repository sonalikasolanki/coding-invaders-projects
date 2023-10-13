function find2NumberSum(target, numbers) {
    let numSet = new Set();
     for (let i = 0; i < numbers.length; i++) {
      let complement = target - numbers[i];
      if (numSet.has(complement)) {
        return [complement, numbers[i]];
      }
      numSet.add(numbers[i]);
    } 
    return [];
  }
let numbers = [7, -5, 2, 0, 1, 14, 4];
let target = -5;
let result = find2NumberSum(target, numbers);
console.log(result);
