function findLargestThreeElements(arr) {
    let largestThree = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (largestThree.length < 3) {
        largestThree.push(arr[i]);
      } else {
        let minIndex = 0;
        for (let j = 1; j < largestThree.length; j++) {
          if (largestThree[j] < largestThree[minIndex]) {
            minIndex = j;
          }
        }
        if (arr[i] > largestThree[minIndex]) {
          largestThree[minIndex] = arr[i];
        }
      }
    }
  
    return largestThree;
  }
  
  let inputArray = [3, 44, 1, 2, 10, 6, 77];
  let largestThree = findLargestThreeElements(inputArray);
  console.log(largestThree);