// 25.Susikurkite funkciją kuri per argumentus priimtų pažymių masyvą. Ji turėtų
// patikrinti ar visi pažymiai teigiami: jei visi teigiami turėtų grąžintų true kaip
// atsakymą, o jei yra bent vienas neigiamas - false. Susikurkite du pažymių
// masyvus. Iškvieskite šią funkciją du kartus, abu kartus perduodant
// skirtingus masyvus. Gautus atsakymus paverskite į tekstą (jeigu gavote
// true - išveskite tekstą 'visi studento pažymiai teigiami', jei false - 'studentas
// turi bent vieną neigiamą pažymį'). Šiam iškonvertavimui iš true/false į
// tekstą galite pamėginti pasikurti atskirą funkciją, jai perduoti kitos
// funkcijos atsakymą.
let marks1 = [8, 9, 9, 8, 10, 10];
let marks2 = [8, 9, 3, 7, 10, 10];

function isPositiveMarks(marksArray) {
  for (const mark of marksArray) {
    if (mark < 5) {
      return false;
    }
  }
  return true;
}

function getStudentResult(state) {
  let result =
    state === true
      ? "Visi studento pazymiai teigiami"
      : "Studentas turi bent viena neigiama pazymi";
  console.log(result);
}

let student1State = isPositiveMarks(marks1);
let student2State = isPositiveMarks(marks2);

getStudentResult(student1State);
getStudentResult(student2State);
