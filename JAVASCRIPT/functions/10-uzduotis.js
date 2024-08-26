// 10.Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti
// kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs -
// tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų,
// duodant skirtingus skaičius.
console.log("_________10 uzduotis_________");
function compareNumbers(number1, number2) {
  if (number1 > number2) {
    console.log(
      "Pirmas skaicius",
      number1,
      "didesnis uz antra skaiciu",
      number2
    );
    return;
  }
  if (number1 < number2) {
    console.log(
      "Antras skaicius",
      number2,
      "didesnis uz pirma skaiciu",
      number1
    );
    return;
  }
  console.log("Skaiciai yra lygus");
}

compareNumbers(15, 13);
compareNumbers(25, 37);
compareNumbers(18, 18);
console.log("________________________");
