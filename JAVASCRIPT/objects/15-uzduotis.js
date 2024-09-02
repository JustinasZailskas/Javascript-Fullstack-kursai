// 15.Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite jį
// pasirinktais duomenimis. Išveskite ligoninių pavadinimus su adresais
// skirtingose eilutėse. Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.:
// bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan.

const hospitals = [
  {
    title: "Sv. Roko ligonine",
    address: "Kliniku g. 2, Vilnius",
    employess: 231,
    biudzetas: null,
  },
  {
    title: "Vilniaus universiteto ligonines Santaros klinikos",
    address: "Santariskiu g. 2, Vilnius",
    employess: 6397,
    biudzetas: 49177000,
  },
  {
    title: "Respublikine Vilniaus universitetine ligonine",
    address: "Siltnamiu g. 29, Vilnius",
    employess: 1878,
    biudzetas: 6893000,
  },
];

function printHospitals(array) {
  for (const hospital of array) {
    console.log(hospital.title, ",", hospital.address);
  }
}

function getEmployesCount(array) {
  const sumEmployess = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue.employess,
    0
  );
  return sumEmployess;
}

printHospitals(hospitals);
console.log(
  "Visos ligonines bendrai sudejus turi tiek darbuotoju",
  getEmployesCount(hospitals)
);
