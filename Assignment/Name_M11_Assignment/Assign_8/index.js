function findMostExpensiveCar(cars) {
    let entries = Object.entries(cars);
    let mostExpensiveCar = entries.reduce((maxCar, currCar) => {
      return currCar[1] > maxCar[1] ? currCar : maxCar;
    });
    return `The most expensive car is ${mostExpensiveCar[0]}`;
  }
  let cars = {'hyundai': 35000, 'tesla': 100000, 'MG': 80000};
  let result = findMostExpensiveCar(cars);
   console.log(result);

  