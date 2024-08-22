// Pagal 16-ą pavyzdį, pritaikykite skriptą prie kitos esybės, t.y. sukurkite tokį
// objektą, kuriame turėtumėte tam tikrų savybių, bei metodą/funkciją, kuri
// kažką paskaičiuotų iš objekto duomenų. Šio objekto informacijos ir
// atsakymų išvedimas irgi būtų panašus į duotą nurodytame pavyzdyje.

let car = {
  make: "BMW",
  model: "M3",
  fuelConsumption: [10, 15, 16, 22, 12, 19],
  average: function () {
    let sum = 0;
    for (const el of this.fuelConsumption) {
      sum += el;
    }
    return sum / this.fuelConsumption.length;
  },
};
console.log(car);
console.log("Degalu vidurkis", car.average());
