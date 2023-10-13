
function getFirstAndSecondMarks() {
    let  [first,second] = studentObject.marks;
    console.log([first,second]);
};
let studentObject = {name: 'David', id: 1, marks:[89, 76, 45, 83, 93]};
getFirstAndSecondMarks()