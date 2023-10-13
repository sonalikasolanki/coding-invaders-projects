function addNum(num, callback) {
    return num + callback();
  }
  
  function secondFunc() {
    return 10;
  }
  
  let result = addNum(5, secondFunc);
  console.log(result); 