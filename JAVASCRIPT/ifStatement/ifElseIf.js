// Susikurkite kintamąjį egzamino pažymiui saugoti [0-10]. Naudojant else if
// dalis patikrinkite šias sąlygas ir išveskite atitinkamą tekstą:
// 1. Jei pažymys yra lygus 10 išvesti “puiku”.
// 2. Jei pažymys yra lygus arba didesnis nei 9 išvesti “labai gerai”.
// 3. Jei pažymys yra lygus arba didesnis nei 7 išvesti “gerai”.
// 4. Jei pažymys yra lygus arba didesnis nei 5 išvesti “patenkinamai”.
// 5. Jei pažymys mažesnis nei 5 išvesti “egzaminas neišlaikytas”.
let exam_mark = 4;

if (exam_mark === 10) {
  console.log(`${exam_mark} - puiku`);
} else if (exam_mark >= 9) {
  console.log(`${exam_mark} - labai gerai`);
} else if (exam_mark >= 7) {
  console.log(`${exam_mark} - gerai`);
} else if (exam_mark >= 5) {
  console.log(`${exam_mark} - patenkinamai`);
} else {
  console.log(`${exam_mark} - deja egzaminas neislaikytas`);
}

// 7. Susikurkite skaičiaus kintamąjį. Patikrinkite ar jis yra lyginis, jei taip
// išveskite vieną informaciją, jei ne - kitą. naudoju number1
if (number1 % 2 === 0) {
  console.log("Skaicius yra lyginis");
} else {
  console.log("Skaicius yra nelyginis");
}
// 8. Susikurkite skaičiaus kintamąjį. Patikrinkite ar šis skaičius dalinasi iš 7, jei
// taip išveskite vieną tekstą, jei ne - kitą.
if (number1 % 7 === 0) {
  console.log("Skaicius dalijasi is 7");
} else {
  console.log("Skaicius nesidalija is 7");
}
// 9. Susikurkite kintamąjį, kuriame nurodytumėte kelią iki norimo failo.
// Patikrinkite ar šis failas yra .js tipo, jei taip išveskite vieną tekstą, jei ne -
// kitą.
let file =
  "/Users/justinaszailskas/Documents/Javascript Fullstack kursai/JAVASCRIPT/operators/script.js";

if (file.endsWith(".js")) {
  console.log("Failas yra su .js pletiniu");
} else {
  console.log("Failas nera su .js pletiniu");
}
