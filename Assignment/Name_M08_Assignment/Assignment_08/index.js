
function findMissingNumber(arr) {
  let missingNumber, missingPosition;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      missingNumber = arr[i] + 1;
      missingPosition = i + 1;
      break;
    }
  }
  return [missingNumber, missingPosition];
}
console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10])); 