function processManufacturers(manufacturers) {
    let processedManufacturers = {
      allLowerCase: [],
      allUpperCase: []
    };
  
    for (let i = 0; i < manufacturers.length; i++) {
      const manufacturer = manufacturers[i];
  
      // Add the processed value to the 'allLowerCase' array
      processedManufacturers.allLowerCase.push(manufacturer.toLowerCase());
  
      // Add the processed value to the 'allUpperCase' array
      processedManufacturers.allUpperCase.push(manufacturer.toUpperCase());
    }
  
    return processedManufacturers;
  }
  
  const manufacturers = ['audi', 'BMw', 'ForD', 'mG', 'tata', 'MAHINDRA'];
  const processedValues = processManufacturers(manufacturers);
  
  console.log(processedValues);
  