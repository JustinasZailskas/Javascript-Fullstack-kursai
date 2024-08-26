// 6. Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma
// informacija apie policininką (vardas, pavardė, amžius, alga, etatas,
// specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite
// į sakinį, ar išveskite sąrašu ar pan.).
console.log("________6 uzduotis_______");
function getInfoAboutPoliceman() {
  let firstname = "Jonas";
  let lastname = "Petrauskas";
  let age = 33;
  let salary = 2300;
  let partOfFulltime = 1;
  let position = "Tyrejas";

  console.log(
    `Policininkas ${firstname} ${lastname} yra ${age} amziaus. Jis uzdirba ${salary} euru atlyginima. Dirba ${partOfFulltime} etato, ${position} pozicijoje.`
  );
}
getInfoAboutPoliceman();
console.log("_________________________");
