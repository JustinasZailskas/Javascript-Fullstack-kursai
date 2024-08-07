// let first_number = 14;
// let second_number = 43;
// let third_number = 16;
// // Uzduotys (1/2)
// // Ar pirmas ir antras skaiciai yra lygus
// if (first_number === second_number) {
//   console.log("Pirmas ir antras skaiciai yra lygus");
// }
// // Ar antras ir trečias skaičiai yra lygūs?
// if (second_number === third_number) {
//   console.log("Antras ir trecias skaiciai yra lygus");
// }
// // Ar pirmas skaičius yra didesnis už antrąjį?
// if (first_number > second_number) {
//   console.log("Pirmas skaicius didesnis uz antra skaiciu");
// }
// // Ar antras skaičius yra didesnis už dvigubą trečiojo skaičiaus reikšmę (trečias skaičius padaugintas iš 2)?
// if (second_number > third_number * 2) {
//   console.log(
//     "Antras skaicius yra didesnis uz trecio skaiciaus dviguba sandauga"
//   );
// }
// // Ar pirmas skaičius yra lyginis (ar dalinasi iš 2)?
// if (first_number % 2 === 0) {
//   console.log("Skaicius yra lyginis");
// }
// // Ar antras skaičius yra nelyginis (ar nesidalina iš 2)?
// if (second_number % 2 === 1) {
//   console.log("Skaicius yra nelyginis ir nesidalina is dvieju");
// }
// // Ar trečias skaičius yra teigiamas (didesnis už 0)?
// if (third_number >= 0) {
//   console.log("Skaicius yra teigiamas");
// }
// // Ar pirmas skaičius yra neigiamas (mažesnis už 0)?
// if (first_number < 0) {
//   console.log("Pirmas skaicius yra neigiamas");
// }
// // Ar antras skaičius dalinasi iš 4?
// if (second_number % 4 === 0) {
//   console.log("Antras skaicius dalijasi is 4");
// }
// // 10. Ar trečias skaičius dalinasi iš 8?
// if (third_number % 8 === 0) {
//   console.log("Trecias skaicius dalijasi is 8");
// }
// Uzduotys (2/2)
// 2. Susikurkite kintamąjį vartotojo amžiui saugoti. Patikrinkite ar amžius yra
// didesnis arba lygus 18-ai, jei taip - išveskite “jūs galite balsuoti”.
// let age = 33;

// if (age >= 18) {
//   console.log("Jus galite balsuoti");
// }

// // 3. Susikurkite kelis kintamuosius saugoti pažymiams. Raskite šių pažymių
// // vidurkį. Patikrinkite ar vidurkis teigiamas (daugiau arba lygu 5-iems), jei
// // taip - išveskite “vidurkis teigiamas”.
// let first_mark = 6;
// let second_mark = 8;
// let third_mark = 4;
// let mark_average = (first_mark + second_mark + third_mark) / 3;

// if (mark_average >= 5) {
//   console.log("Vidurkis teigiamas");
// }

// // 4. Susikurkite skaičiaus kintamąjį. Atlikite šiuos patikrinimus ir veiksmus:
// //    1. Jei skaičius dalinasi iš 5, tuomet išveskite šio skaičiaus daugybos lentelę nuo 1 iki 5.
// //    2. Jei skaičius lyginis, tuomet išveskite šį skaičių, jo kvadratą ir jį padalintą iš 2.
// //    3. Jei skaičius nesidalina iš 7, tuomet susikurkite antrąjį kintamąjį, išveskite šių dviejų skaičių sumą,
// // skirtumą, sandaugą, dalmenį.

// let random_number = 15;

// if (random_number % 5 === 0) {
//   console.log(
//     `Skaiciaus ${random_number} daugyba is 1 yra lygu ${random_number * 1}`
//   );
//   console.log(
//     `Skaiciaus ${random_number} daugyba is 2 yra lygu ${random_number * 2}`
//   );
//   console.log(
//     `Skaiciaus ${random_number} daugyba is 3 yra lygu ${random_number * 3}`
//   );
//   console.log(
//     `Skaiciaus ${random_number} daugyba is 4 yra lygu ${random_number * 4}`
//   );
//   console.log(
//     `Skaiciaus ${random_number} daugyba is 5 yra lygu ${random_number * 5}`
//   );
// }
// if (random_number % 2 === 0) {
//   console.log(
//     "Skaicius lyginis tai papildomai atliekam skaiciavimus",
//     Math.pow(random_number, 2) / 2
//   );
// }
// if (random_number % 7 !== 0) {
//   let statement_num = 3;
//   console.log("Dvieju skaiciu suma", random_number + statement_num);
//   console.log("Skirtumas", random_number - statement_num);
//   console.log("Sandauga", random_number * statement_num);
//   console.log("Dalyba", random_number / statement_num);
// }

let number1 = 36;
let number2 = 36;
let number3 = 24;

// 1. Ar pirmas skaičius didesnis už antrą?
if (number1 > number2) {
  console.log("Pirmas skaicius didesnis");
} else {
  console.log("Pirmas skaicius mazesnis");
}
// 2. Ar antras skaičius didesnis už trečią?
if (number2 > number3) {
  console.log("Antras skaicius didesnis");
} else {
  console.log("Antras skaicius mazesnis");
}

// 3. Ar trečias skaičius didesnis už pirmą?
if (number3 > number1) {
  console.log("Trecias skaicius didesnis");
} else {
  console.log("Trecias skaicius mazesnis");
}
// 4. Ar pirmi du skaičiai yra lygūs?
if (number1 === number2) {
  console.log("Pirmi du skaiciai yra lygus");
} else {
  console.log("Pirmas ir antras skaiciai nera lygus");
}
// 5. Ar paskutiniai du skaičiai yra lygūs?

if (number2 === number3) {
  console.log("Paskutiniai du skaiciai yra lygus");
} else {
  console.log("Paskutiniai du skaiciai nera lygus");
}
// 6. Ar pirmas skaičius yra lygus 0?

if (number1 === 0) {
  console.log("Pirmas skaicius lygus 0");
} else {
  console.log("Pirmas skaicius nera lygus 0");
}
// 7. Ar antras skaičius neigiamas?

if (number2 < 0) {
  console.log("Antras skaicius yra neigiamas");
} else {
  console.log("Antras skaicius yra teigiamas");
}
// 8. Ar trečias skaičius teigiamas?
if (number3 >= 0) {
  console.log("Trecias skaicius yra teigiamas");
} else {
  console.log("Trecias skaicius yra neigiamas");
}

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
import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`);
  rl.close();
});
