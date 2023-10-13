function findDuplicate(arr) {
    let duplicateNumber, duplicatePosition, duplicateIndex;
    let visited = {};
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (visited[num]) {
        duplicateNumber = num;
        duplicatePosition = visited[num];
        duplicateIndex = i;
        break;
      }
      visited[num] = i + 1;
    }
    return `The duplicate number is ${duplicateNumber}, and its position in the list is ${duplicatePosition} with an index of ${duplicateIndex}.`;
  }
  console.log(findDuplicate([1, 2, 3, 4, 3, 5])); 