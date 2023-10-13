
function listProperties(object) {
 
  let propertyNames = Object.keys(object);
  let propertiesString = propertyNames.join(',');
  return propertiesString;
}
let sampleObject = {
  name: 'Vishal',
  class: 'X',
  seatNo: 987
};
let result = listProperties(sampleObject);
console.log(result);
