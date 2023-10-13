let mainFunc = function(callback) {
    // Call the provided callback function
    callback();
  };
  
  // Define a secondary function
  let secondaryFunc = function() {
    console.log("This is a secondary function.");
  };
  
  mainFunc(secondaryFunc);