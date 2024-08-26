// 15.Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei
// studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir
// pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už
// funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba
// objektus studentų pažymiams saugoti ir užpildykite juos duomenimis.
// Iškvieskite šią funkciją perduodant visus reikalingus duomenis.
console.log("____________15 uzduotis___________");
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

function getAverage(marksArray) {
  let sum = 0;
  for (let i = 0; i < marksArray.length; i++) {
    sum += marksArray[i];
  }
  let average = sum / marksArray.length;
  return average;
}

function getStudentInformation(data) {
  let marks = data.marks.join(" ");
  let average = getAverage(data.marks);
  console.log(
    "Studentas:",
    data.firstname,
    data.lastname,
    "\nStudento pazymiai: ",
    marks,
    "\nPazymiu vidurkis",
    average
  );
}

getStudentInformation(student1);
getStudentInformation(student2);
console.log("________________________________");
