// 13.Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis.
// Išveskite kiekvieno automobilio pavadinimą, metus ir paskaičiuotą jo amžių
// (dabartiniai metai - gamybos metai).

let cars = [
  {
    make: "BMW",
    model: "M3",
    year: "2004",
    price: 59000,
  },
  {
    make: "BMW",
    model: "320 M3 Coupe Sport Evolution",
    year: "1991",
    price: 164500,
  },
  {
    make: "BMW",
    model: "320i",
    year: "1989",
    price: 25900,
  },
];

function getYear(year) {
  const date2 = new Date().getFullYear();
  return date2 - year;
}

cars.forEach((car) => {
  console.log("Automobilio marke", car.make);
  console.log("Automobilio modelis", car.model);
  console.log("Automobilio pagaminimo metai", car.year);
  console.log("Kiek metu automobiliui", getYear(car.year));
});
