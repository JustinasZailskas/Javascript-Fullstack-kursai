// 8. Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose
// objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų
// programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių
// vidurkius. Išveskite abiejų studentų informaciją, bei pažymių vidurkius.
// Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir
// išveskite jo vardą su pavarde.

let student1 = {
  firstname: "Jonas",
  lastname: "Jonaitis",
  studyProgram: "Kompiuteriu inzinerija",
  marks: [8, 9, 6, 7, 10, 10],
};
let student2 = {
  firstname: "Petras",
  lastname: "Petraitis",
  studyProgram: "Programu sistemos",
  marks: [8, 9, 9, 8, 10, 10],
};
let avg1 = 0;
let avg2 = 0;
let highAvg = {};
for (const property in student1) {
  if (property !== "marks") {
    console.log(property, ":", student1[property]);
  } else {
    console.log("Pazymiai");
    for (const mark of student1.marks) {
      console.log(mark);
    }
    let sum = 0;
    for (const mark of student1.marks) {
      sum += mark;
    }
    avg1 = sum / student1.marks.length;
    console.log("Pazymiu vidurkis:", avg1);
  }
}
for (const property in student2) {
  if (property !== "marks") {
    console.log(property, ":", student2[property]);
  } else {
    console.log("Pazymiai");
    for (const mark of student2.marks) {
      console.log(mark);
    }
    let sum = 0;
    for (const mark of student2.marks) {
      sum += mark;
    }
    avg2 = sum / student2.marks.length;
    console.log("Pazymiu vidurkis:", avg2);
  }
}

if (avg1 > avg2) {
  console.log("Pirmo studento vidurkis didesnis");
  highAvg = student1;
} else if (avg2 > avg1) {
  console.log("Antro studento vidurkis didesnis");
  highAvg = student2;
} else {
  console.log("Studentu vidurkiai lygus");
}
console.log("Vardas ir pavarde", highAvg.firstname, highAvg.lastname);
