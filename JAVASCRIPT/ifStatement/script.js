// 10.Susikurkite skaičiui saugoti skirtą kintamąjį. Tikrinkite (naudojant visas if sąlygos dalis):
// 1. Ar skaičius yra lyginis?
// 2. Ar dalinasi iš 5?
// 3. Ar skaičius lygus 3?
// 4. Jeigu nieko nepavyko rasti, išveskite klaidos pranešimą.
let number1 = 37;

if (number1 % 2 === 0) {
  console.log("Skaicius ", number1, " yra lyginis");
} else if (number1 % 5 === 0) {
  console.log("Skaicius ", number1, " dalijasi is 5");
} else if (number1 === 3) {
  console.log("Skaicius lygus 3");
} else {
  console.log("Skaicius ", number1, " netenkina nei vienos salygos");
}

// 11.Susikurkite tris skaičius. Tikrinkite (naudojant visas if sąlygos dalis):
// 1. Ar pirmi du skaičiai lygūs?
// 2. Ar pirmas ir trečias skaičiai lygūs?
// 3. Ar trečias skaičius didesnis už pirmą?
// 4. Ar antras skaičius lygus dvigubai trečio skaičiaus reikšmei?
// 5. Ar pirmas skaičius dalinasi iš 3?
// 6. Jei nieko nepavyko rasti, išveskite klaidos pranešimą.

let numberA = 33;
let numberB = 15;
let numberC = 24;

if (numberA === numberB) {
  console.log("Pirmas ir antras skaiciai yra lygus");
} else if (numberA === numberC) {
  console.log("Pirmas ir trecias skaiciai yra lygus");
} else if (numberC > numberA) {
  console.log("Trecias skaicius yra didesnis uz pirma skaiciu");
} else if (numberB === numberC * 2) {
  console.log("Antras skaicius yra lygus dvigubai trecio skaiciaus");
} else if (numberA % 3 === 0) {
  console.log("Pirmas skaicius dalinasi is 3");
} else {
  console.log("Salygos netenkinamos");
}
