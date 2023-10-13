let myArray = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" }
  ];
  
  let iterableObject = myArray.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
  
  console.log(iterableObject);
  