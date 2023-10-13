
let arrayOfObjects = [
    {
      firstName: 'John',
      lastName: 'Apple',
      age: 27,
      joinedDate: 'December 15, 2017'
    },
    {
      firstName: 'Ana',
      lastName: 'Rosy',
      age: 25,
      joinedDate: 'January 15, 2019'
    },
    {
      firstName: 'Zion',
      lastName: 'Albert',
      age: 30,
      joinedDate: 'February 15, 2011'
    }
  ];
  
  arrayOfObjects.sort(function(a, b) {
    return new Date(a.joinedDate) - new Date(b.joinedDate);
  });

  arrayOfObjects.forEach(function(obj) {
    console.log('This is ' + obj.firstName + ' ' + obj.lastName + ', aged ' + obj.age + ' joined the company on ' + obj.joinedDate);
  });
  