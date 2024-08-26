// 7. Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje,
// skaičius atskiriant tarpu. Šią funkciją iškvieskite 5 kartus.
console.log("________7 uzduotis_______");
function generateRandomNumbers() {
  let string = "";
  for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 100);
    string = string.concat(randomNum, " ");
  }
  console.log("Skaiciu seka is 10 elementu:", string);
}

generateRandomNumbers();
generateRandomNumbers();
generateRandomNumbers();
generateRandomNumbers();
generateRandomNumbers();
console.log("_________________________");
