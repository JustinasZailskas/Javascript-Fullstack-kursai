// 1. Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa,
// atsiskaitytų kreditų skaičius, pažymiai, amžius, ūgis, kelintame kurse
// mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į
// vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per
// vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris
// skirtingas pasirinktas savybes.
const student = {
  firstname: "Jonas",
  lastname: "Jonaitis",
  age: "20",
  studyProgram: "Kompiuteriu inzinerija",
  credits: 30,
  marks: [8, 9, 6, 7, 10, 10],
  height: 183,
  course: 2,
  school: "VSC",
};
console.log(student);

for (let property in student) {
  console.log(`${property}: ${student[property]}`);
}
