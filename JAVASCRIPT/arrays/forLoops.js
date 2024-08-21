// // 6. Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį
// // masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.
// let studProgr = [
//   "Informacines sistemos",
//   "Kompiuteriu inzinerija",
//   "Programu sistemos",
//   "Programines irangos testavimas",
// ];

// for (let i = 0; i < studProgr.length; i++) {
//   console.log(studProgr[i]);
// }
// // 7. Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis.
// // Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada
// // nurodant šalį iš masyvo.
// let salis = ["Albanija", "Belgija", "Lietuva", "Norvegija", "Suomija"];
// for (let i = 0; i < salis.length; i++) {
//   console.log("Salis", salis[i]);
// }
// // 8. Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite
// // šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš
// // kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).
// let projects = ["KABADA", "Cyber security", "New Project"];

// for (let i = 0; i < projects.length; i++) {
//   console.log(`${i + 1} projektas: ${projects[i]}`);
// }
// // 9. Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite
// // tik tuos skaičius, kurie yra didesni nei 5.
// let numList = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// for (let i = 0; i < numList.length; i++) {
//   if (numList[i] > 5) {
//     console.log(numList[i]);
//   }
// }
// // 10.Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite
// // visų skaičių, kurie dalinasi iš 4 sumą.
// let randomList = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];
// let suma = 0;

// for (let i = 0; i < randomList.length; i++) {
//   if (randomList[i] % 4 === 0) {
//     suma += randomList[i];
//   }
// }
// console.log("Skaiciu kurie dalijasi is 4 suma", suma);
// // 11.Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite
// // šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį.
// let marksList = [8, 6, 9, 10, 10, 5];
// let marksAdd = 0;

// for (let i = 0; i < marksList.length; i++) {
//   marksAdd += marksList[i];
//   console.log(`${i + 1} - as pazymys yra ${marksList[i]}`);
// }
// let marksAvg = marksAdd / marksList.length;
// console.log("Pazymiu vidurkis", marksAvg);
// // 12.Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite
// // šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.
// let marksList = [8, 6, 9, 10, 10, 5];
// let markAdd = 0;
// for (let i = 0; i < marksList.length; i++) markAdd += marksList[i];
// const marksAvg = markAdd / marksList.length;
// for (let i = 0; i < marksList.length; i++) {
//   if (marksList[i] > marksAvg) {
//     console.log("Sis pazymys didesnis nei vidurkis", marksList[i]);
//   }
// }
// // 13.Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus
// // skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo
// // kvadratą.
// let randomList = [15, 10, 26, 89, 45, 66];
// for (let i = 0; i < randomList.length; i++) {
//   if (randomList[i] % 2 === 0) {
//     let numSquare = randomList[i] * randomList[i];
//     console.log(
//       "Skaicius",
//       randomList[i],
//       "jis yra lyginis, tai jo kvadratas bus lygus",
//       numSquare
//     );
//   } else {
//     console.log("skaicius ", randomList[i], "nera lyginis");
//   }
// }

// // 14.Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis
// // (atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje
// // eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas
// // pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek
// // balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.

// let marksList = [8, 6, 9, 10, 10, 5, 3, 2];
// for (let i = 0; i < marksList.length; i++) {
//   if (marksList[i] > 4) {
//     console.log(marksList[i], "pazymys yra teigiamas");
//   } else {
//     console.log(
//       marksList[i],
//       "pazymys yra neigiamas iki teigiamo ivertinimo truko",
//       5 - marksList[i],
//       "balu"
//     );
//   }
// }
// // 15.Susikurkite žodžių masyvą ir užpildykite duomenimis. Išveskite visus
// // žodžius ekrane, nurodant iš kiek raidžių kiekvienas šis žodis yra sudarytas.
// // Papildykite skriptą taip, kad rastumėte visų raidžių kiekį (pvz yra žodžiai
// // "medis" ir "alus", 5 ir 4 raidės atitinkamai, o jas sudėjus gaunasi 9 raidės).
// let wordList = ["Zalgiris", "Rytas", "Neptunas", "Lietkabelis", "Wolves"];
// let letterNumb = 0;
// for (let i = 0; i < wordList.length; i++) {
//   console.log("Zodis ", wordList[i], "turi tiek simboliu", wordList[i].length);
//   letterNumb += wordList[i].length;
// }
// console.log("Per visus zodzius yra tiek raidziu:", letterNumb);

// // 16.Susikurkite skaičių masyvą ir užpildykite duomenimis. Raskite visų skaičių,
// // kurie dalinasi iš 3 sumą ir vidurkį. Išveskite pradinius duomenis ir gautus
// // atsakymus.
// let list = [4, 5, 8, 10, 15, 18, 3];
// let sum = 0;
// let numCount = 0;
// for (let i = 0; i < list.length; i++) {
//   if (list[i] % 3 === 0) {
//     numCount++;
//     sum += list[i];
//   }
//   console.log("Skaicius is masyvo", list[i]);
// }
// let avg = sum / numCount;
// console.log("Skaiciu kurie dalijasi is 3 suma", sum);
// console.log("Skaiciu kurie dalijasi is 3 vidurkis", avg);

// // 17.Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite
// // visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...
// let words = ["siaubas", "baubas", "maumas", "laumas"];
// for (const index in words) {
//   console.log(index, "-", words[index]);
// }
// // 18.Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis.
// // Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą
// // atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką.
// let shoppingList = ["Indu ploviklis", "degtukai", "pienas", "varske", "duona"];
// for (const el in shoppingList) {
//   console.log("-", shoppingList[el]);
// }

// // 19.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą
// // duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir
// // gautą vidurkį.
// let marksList = [8, 6, 9, 10, 10, 5, 3, 2];
// let sum = 0;
// for (const mark of marksList) {
//   sum += mark;
// }
// let avg = sum / marksList.length;
// for (const index in marksList) {
//   console.log(marksList[index]);
// }
// console.log("Vidurkis ", avg);

// // 20.Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir
// // užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius
// // reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus
// // per dieną kilometrus, kurie yra didesni nei 150.
// let distKm = [140, 123, 175, 152, 98, 121, 87];
// for (const index in distKm) {
//   if (distKm[index] >= 150) {
//     let dayNum = parseInt(index) + 1;
//     console.log(dayNum, "- a diena buvo nuvaziuota", distKm[index], "km");
//   }
// }
// // 21.Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis.
// // Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais
// // galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt
// // arba .json tipo.
// // using file.endsWith(".js")

// let files = ["test.txt", "test.json", "test.js", "test.sql", "test.cs"];

// for (const file of files) {
//   if (file.endsWith(".json") || file.endsWith(".txt")) {
//     console.log(file);
//   }
// }
// // 22.Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį
// // duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant
// // kiek raidžių sudaro jo pavadinimą.
// let cars = ["AUDI", "BMW", "CHRYSLER", "SKODA", "VOLVO"];
// for (const car of cars) {
//   console.log(car, "pavadinimas turi", car.length, "simbolius");
// }

// // 23.Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą
// // duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui,
// // taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas
// // "ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu
// // kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan.
// let errorsCodesList = ["ui87", "sys12"];
// for (const code of errorsCodesList) {
//   if (code === "ui87") {
//     console.log("Grafines sasajos klaida navigacijoje");
//   } else if (code === "sys12") {
//     console.log("Truksta operatyviosios atminties sistemoje");
//   } else {
//     console.log("Klaidos kodas neatpazintas");
//   }
// }
// // 24.Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve
// //   yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus
// //   išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus
// //   atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu
// //   yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės
// //   užteks maždaug 11 dienų ir t.t.
// let itemsQuantity = [35, 33, 26, 84, 69];
// for (const index in itemsQuantity) {
//   let daysLeft = Math.round(itemsQuantity[index] / 5);
//   console.log(
//     parseInt(index) + 1,
//     "prekes kiekis likes yra",
//     itemsQuantity[index],
//     "ju turetu uztekti",
//     daysLeft
//   );
// }
// //   25.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai
// //   sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas
// //   gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų
// //   pažymių kiekį.
// let marksList = [8, 6, 9, 10, 10, 5, 3, 2];
// let markSum = 0;
// let negativeNumQuantity = 0;

// for (const mark of marksList) {
//   markSum += parseInt(mark);
//   if (mark < 5) {
//     negativeNumQuantity++;
//   }
// }
// console.log("Teigiami pazymiai");
// for (const mark of marksList) {
//   if (mark > 4) {
//     console.log("Pazymys: ", mark);
//   }
// }
// console.log("Pazymiu vidurkis", markSum / marksList.length);
// console.log("Neigiamu pazymiu kiekis", negativeNumQuantity);

// // 26.Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento
// // pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno
// // studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir
// // nurodykite kuris studentas turi didesnį vidurkį.
// let student1Marks = [8, 6, 9, 10, 10, 5];
// let student2Marks = [9, 8, 8, 10, 10, 8];
// let student1Sum = 0;
// let student2Sum = 0;
// for (const mark of student1Marks) {
//   student1Sum += mark;
// }
// for (const mark of student2Marks) {
//   student2Sum += mark;
// }
// let student1Avg = student1Sum / student1Marks.length;
// let student2Avg = student2Sum / student2Marks.length;
// console.log("_______Pirmo studento informacija_______");
// console.log("Pazymiai:");
// for (const mark of student1Marks) {
//   console.log(mark);
// }
// console.log("Pirmo studento vidurkis", student1Avg);
// console.log("-----------------------------------------");
// console.log("_______Antro studento informacija_______");
// console.log("Pazymiai:");
// for (const mark of student2Marks) {
//   console.log(mark);
// }
// console.log("Antro studento vidurkis", student2Avg);
// console.log("-----------------------------------------");
// if (student1Avg > student2Avg) {
//   console.log("Pirmo studento vidurkis didesnis");
// } else if (student1Avg < student2Avg) {
//   console.log("Antro studento vidurkis didesnis");
// } else {
//   console.log("Abieju studentu vidurkis toks pat");
// }

// 27.Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą
// duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro
// mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus.

let words = [
  "Indu ploviklis",
  "degtukai",
  "pienas",
  "varske",
  "duona",
  "sula",
  "ola",
];
let filterWords = [];
for (const word of words) {
  if (word.length < 5) {
    filterWords.push(word);
  }
}
console.log("Informacija visu zodziu");
for (const key in words) {
  console.log(words[key]);
}
console.log("Informacija atrinktu zodziu");
for (const key in filterWords) {
  console.log(filterWords[key]);
}
