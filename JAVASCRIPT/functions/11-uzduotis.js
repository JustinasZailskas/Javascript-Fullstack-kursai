// 11.Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė,
// modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti
// kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant
// skirtingus duomenis jai.
console.log("_________11 uzduotis_________");
function getCarInformation(make, model, year, engine) {
  console.log(
    "Automobilis",
    make,
    model,
    "yra pagamintas",
    year,
    "metais. Sio automobilio darbinis turis yra",
    engine
  );
}
getCarInformation("BMW", "M3", 2012, 4.4);
getCarInformation("Mercedes Benz", "C 63 AMG", 2012, 6.2);
console.log("________________________");
