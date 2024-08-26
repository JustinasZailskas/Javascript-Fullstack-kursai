// 5. Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius.
// Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą, kartu išvedant
// ir patį atliekamą veiksmą (pvz 7 + 2 = 9). Iškvieskite šią funkciją keletą
// kartų.
console.log("________5 uzduotis_______");
function twoRandomNumAdd() {
  let num1 = Math.round(Math.random() * 100);
  let num2 = Math.round(Math.random() * 100);
  let twoNumsSubstract = num1 - num2;
  console.log("Skaiciu", num1, "ir", num2, "atimtis lygi", twoNumsSubstract);
}
twoRandomNumAdd();
twoRandomNumAdd();
twoRandomNumAdd();
twoRandomNumAdd();
console.log("________________________");
