function updateArray(arr, modifyFunc) {
    console.log('Old Array:', arr);
    
    // Modify the array using the provided function
    let updatedArray = modifyFunc(arr);
    
    console.log('New Updated Array:', updatedArray);
  }
  
 
  let originalArray = [1, 2, 3, 4, 5];
  
  // Define a modification function
  let modifyFunc = (array) => {
    // Square each element of the array
    let modifiedArray = array.map((num) => num * num);
    return modifiedArray;
  };
  
  // Call the updateArray 
  updateArray(originalArray, modifyFunc);
  