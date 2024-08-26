// 23.Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų
// rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite
// du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du
// kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite.
// Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.
function getSum(array) {
  let sum = 0;
  for (const el of array) {
    sum += el;
  }
  return sum;
}

let array1 = [5, 16, 12, 8, 7, 20];
let array2 = [6, 17, 13, 9, 8, 21];

console.log("Pirmo masyvo elementu suma", getSum(array1));
console.log("Antro masyvo elementu suma", getSum(array2));
