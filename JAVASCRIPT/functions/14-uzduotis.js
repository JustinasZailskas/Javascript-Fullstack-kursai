// 14.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
// turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį
// padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir
// užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą
// perduodant skirtingą turimą masyvą.

function calculations(numArray) {
  for (const num of numArray) {
    let numSquare = Math.pow(num, 2);
    let numDivisionBy2 = num / 2;
    console.log(
      `Skaicius ${num} kvadratas ${numSquare} padalintas per puse ${numDivisionBy2}`
    );
  }
}

let numberArray1 = [5, 16, 12, 8, 7, 20];
let numberArray2 = [6, 17, 13, 9, 8, 21];

console.log("Pirmas masyvas");
calculations(numberArray1);
console.log("_______________");
console.log("Antras masyvas");
calculations(numberArray2);
