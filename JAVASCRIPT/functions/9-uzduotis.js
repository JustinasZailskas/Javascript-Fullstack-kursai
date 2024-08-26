// 9. Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus
// perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite
// kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 'viso
// gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir
// įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms.
console.log("_________9 uzduotis_________");
function functionGreeting(name) {
  console.log("Labas,", name);
}
function functionGoodbye(name) {
  console.log("Viso gero, ", name);
}

let username = "Petras";
functionGreeting(username);
functionGoodbye(username);
console.log("________________________");
