let arrayOfObjects = [
    {
      name: 'John',
      city: 'Delhi'
    },
    {
      name: 'Tony',
      city: 'Mumbai'
    },
    {
      name: 'Steve',
      city: 'Bangalore'
    }
  ];
  
  ///////////////////////////////////////////
  arrayOfObjects.forEach(function(obj) {
    obj.oneLineIntro = function() {
      return 'This is ' + obj.name + ' from ' + obj.city;
    };
  });
  //////////////////////////////////////////
  
  arrayOfObjects.forEach(function(obj) {
    console.log(obj.oneLineIntro());
  });