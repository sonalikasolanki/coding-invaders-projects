function flip(arr) {
    let flippedArr = arr.map(num => num ^ 1);
    return flippedArr;
  }
  let arr = [0, 1, 1, 1, 0, 0, 1];
  let result = flip(arr);
  console.log(result);
    