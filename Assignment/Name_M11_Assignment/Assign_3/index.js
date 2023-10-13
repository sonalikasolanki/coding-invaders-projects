const array1 = [{ name: 'David', id: 1 }, { name: 'Jon', id: 2 }];
  const array2 = [{ name: 'Ram', id: 4 }, { name: 'Mohan', id: 3 }];

   function joinArray(array1, array2) {
    return [...array1, ...array2];
  }
  const result = joinArray(array1, array2);
  console.log(result);
  