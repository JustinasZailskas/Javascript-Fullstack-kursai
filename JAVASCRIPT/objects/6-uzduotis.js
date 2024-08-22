let car = {
  make: "BMW",
  model: "320D",
  mileage: 292458,
  year: 2010,
  color: "black",
  damaged: true,
  sale: false,
  fuelConsumption: [5.4, 4.4, 7.1],
};

//vidutines kuro sanaudos 5.4l/100km. Kiek litru kuro sudegino automobilis
//sunaudojamus litrus daliname is 100km ir suzinosime kiek kuro reikia vienam kilometrui
let combinedLPerKM = car.fuelConsumption[0] / 100;
console.log(typeof combinedLPerKM);
let openRoadLPerKM = car.fuelConsumption[1] / 100;
let cityLPerKM = car.fuelConsumption[2] / 100;
console.log("------------------------------------");
console.log("Automobilis per savo nuvaziuota atstuma sudegino tiek degalu:");
let litersCombined = Math.round(car.mileage * combinedLPerKM);
let litersOpenRoad = Math.round(car.mileage * openRoadLPerKM);
let litersCity = Math.round(car.mileage * cityLPerKM);
console.log("Misrus", litersCombined);
console.log("Atvirame kelyje", litersOpenRoad);
console.log("Mieste", litersCity);
console.log("------------------------------------");
