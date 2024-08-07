let number1 = 14;
let number2 = 19;
let number3 = 9;

// 12.Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra didžiausias.
if (number1 > number2 && number1 > number3) {
  console.log("Skaicius ", number1, " yra didziausias");
} else if (number2 > number1 && number2 > number3) {
  console.log("Skaicius ", number2, " yra didziausias");
} else if (number3 > number1 && number3 > number2) {
  console.log("Skaicius ", number3, " yra didziausias");
}
// 13.Susikurkite tris skaičius. Suraskite kuris iš šių skaičių yra mažiausias.
if (number1 < number2 && number1 < number3) {
  console.log("Skaicius ", number1, " yra maziausias");
} else if (number2 < number1 && number2 < number3) {
  console.log("Skaicius ", number2, " yra maziausias");
} else if (number3 < number1 && number3 < number2) {
  console.log("Skaicius ", number3, " yra maziausias");
}
// 14.Susikurkite trijų egzaminų rezultatų kintamuosius. Suraskite pažymių vidurkį. Atlikite
// šiuos patikrinimus:
// 1. ar gautas vidurkis yra [8-10];
// 2. ar gautas vidurkis yra [5-8);
// 3. ar gautas vidurkis yra < 5.
let mathMark = 6;
let mathCredits = 3;
let structureProgrammingMark = 4;
let structureProgrammingCredits = 6;
let operatingSystemsMark = 2;
let operatingSystemsCredits = 6;
let average =
  (mathMark * mathCredits +
    structureProgrammingMark * structureProgrammingCredits +
    operatingSystemsMark * operatingSystemsCredits) /
  15;
if (average >= 8 && average <= 10) {
  console.log("Vidurkis yra tarp [8-10]", average);
} else if (average >= 5 && average < 8) {
  console.log("Vidurkis yra tarp [5-8)", average);
} else {
  console.log("Vidurkis yra mazesnis uz 5", average);
}
// 15.Susikurkite du skaičius. Patikrinkite (naudojant 4 atskirus if’us):
let numberA = 20;
let numberB = 5;
// 1. ar pirmas skaičius yra didesnis už antrąjį arba yra lygus 0;
if (numberA > numberB || numberA === 0) {
  console.log("SKaicius A didesnis uz skaiciu B, arba lygus 0");
} else {
  console.log("Netenkina nei vienos salygos");
}
// 2. ar antras skaičius yra didesnis už pirmąjį arba yra lygus 5;
if (numberB > numberA || numberB === 5) {
  console.log("SKaicius B didesnis uz skaiciu A, arba lygus 5");
} else {
  console.log("Netenkina nei vienos salygos");
}
// 3. ar pirmas skaičius yra didesnis už antrąjį ir yra lygus 20;
if (numberA > numberB && numberA === 20) {
  console.log("SKaicius A didesnis uz skaiciu B ir yra lygus 20");
} else {
  console.log("Netenkina nei vienos salygos");
}
// 4. ar antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100;
if (numberB > numberA && numberB < 100) {
  console.log("SKaicius B didesnis uz skaiciu A ir mazesnis uz 0");
} else {
  console.log("Netenkina nei vienos salygos");
}
