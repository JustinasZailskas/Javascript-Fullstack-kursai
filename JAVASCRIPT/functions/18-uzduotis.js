// 18.Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių.
// Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu
// norite būdu.
function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * 100);
  return randomNum;
}

let randomNum1 = getRandomNumber();
let randomNum2 = getRandomNumber();
let randomNum3 = getRandomNumber();

console.log("Pirmas atsitiktinis skaicius: ", randomNum1);
console.log("Antras atsitiktinis skaicius: ", randomNum2);
console.log("Trecias atsitiktinis skaicius: ", randomNum3);
