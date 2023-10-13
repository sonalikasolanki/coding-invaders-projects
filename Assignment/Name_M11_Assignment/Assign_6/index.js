let student = {
    marks: [23, 56, 78, 89, 43],
    largestSwapExistsInMarks: function(num) {
      let largestSwap = parseInt(num.toString().split('').reverse().join(''));
  
      return this.marks.includes(largestSwap);
    }
  };
  
  console.log(student.largestSwapExistsInMarks(78));
  console.log(student.largestSwapExistsInMarks(34));
  