let employees = [
    {
      firstName: 'Steve',
      lastName: 'Rogers',
      age: 27,
      joinedDate: 'December 15, 2017'
    },
    {
      firstName: 'Tony',
      lastName: 'Stark',
      age: 25,
      joinedDate: 'January 15, 2019'
    },
    {
      firstName: 'Bruce',
      lastName: 'Banner',
      age: 30,
      joinedDate: 'February 15, 2011'
    }
  ];
  
  // Subtask 1: Add new employee object at the end of the array
  employees.push({
    firstName: 'Black',
    lastName: 'Widow',
    age: 27,
    joinedDate: 'December 25, 2018'
  });
  
  // Subtask 2: Add new employee object at the start of the array
  employees.unshift({
    firstName: 'Winter',
    lastName: 'Soldier',
    age: 27,
    joinedDate: 'October 15, 2007'
  });
  
  // Subtask 3: Print the objects data
  console.log('output1:');
  employees.forEach(function(employee) {
    console.log(`First Name: ${employee.firstName}`);
    console.log(`Last Name: ${employee.lastName}`);
    console.log(`Age: ${employee.age}`);
    console.log(`Joined Date: ${employee.joinedDate}`);
    console.log('---');
  });
  
  // Subtask 4: Cannot add new objects, but properties can be changed
 //////////////////////////
  
  // Subtask 5: Change the joinedDate property value for all objects
  employees.forEach(function(employee) {
    employee.joinedDate = 'December 13, 2021';
  });
  
  // Subtask 6: Print the objects data after property changes
  console.log('output2:');
  employees.forEach(function(employee) {
    console.log(`First Name: ${employee.firstName}`);
    console.log(`Last Name: ${employee.lastName}`);
    console.log(`Age: ${employee.age}`);
    console.log(`Joined Date: ${employee.joinedDate}`);
    console.log('---');
  });
  
  