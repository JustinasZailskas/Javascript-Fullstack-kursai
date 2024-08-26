// 16.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
// turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat,
// susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų
// pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus.
// Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą
// perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti,
// masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba
// per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos
// funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją.

let numArray1 = [];
let numArray2 = [];
let numArray3 = [];

function generateNumbers(array) {
  let newArray = array;
  for (let i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 100);
    newArray.push(number);
  }
}
function showArray(array) {
  console.log(array.join(" "));
}

function findMaxNumber(array) {
  let maxNum = 0;
  for (const num of array) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}
generateNumbers(numArray1);
generateNumbers(numArray2);
generateNumbers(numArray3);

showArray(numArray1);
showArray(numArray2);
showArray(numArray3);

console.log("Didziausias skaicius 1 masyve", findMaxNumber(numArray1));
console.log("Didziausias skaicius 2 masyve", findMaxNumber(numArray2));
console.log("Didziausias skaicius 3 masyve", findMaxNumber(numArray3));
