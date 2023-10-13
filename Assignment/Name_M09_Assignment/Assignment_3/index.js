function createPerson(input) {
    let values = input.split(',');
    let name = values[0].trim();
    let age = values[1].trim();
    let roomNumber = values[2].trim();
      let person = {
      name: name,
      age: age,
      roomNumber: roomNumber,
      introduce: function() {
        return `I am ${this.name.toLowerCase()}, aged ${this.age}, living in room ${this.roomNumber}`;
      }
    };
    return person;
  }
  let userInput = 'Steve,27,111';
  let personObject = createPerson(userInput);
  console.log(personObject.introduce());
  