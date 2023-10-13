function duplicateArray(arr) {
    return arr.concat(arr);
  }
  
  
  const originalArray = [1, 2, 3, 4, 5];
  const duplicatedArray = duplicateArray(originalArray);
  console.log(duplicatedArray);
  