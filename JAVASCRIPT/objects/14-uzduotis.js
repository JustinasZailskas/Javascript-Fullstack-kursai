// 14.Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite
// duomenimis. Išveskite kiekvienos įmonės informaciją atskirose eilutėse,
// gražiai suformatuotai (sakinio pavidalu ar pan.). Taip pat, ką nors
// paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis įmonės amžius,
// darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.).

let companies = [
  {
    company: "Megrame Medis",
    createdYear: 1999,
    employees: 47,
    salesRevenue: 5679027,
    averageSalary: 2707.34,
    transport: 3,
  },
  {
    company: "Amzinas Medis",
    createdYear: 2018,
    employees: 3,
    salesRevenue: 117879,
    averageSalary: null,
    transport: 1,
  },
  {
    company: "Dzuko Medis",
    createdYear: 2011,
    employees: 4,
    salesRevenue: 429804,
    averageSalary: 947.28,
    transport: 4,
  },
];

companies.forEach((company) => {
  let averageSalary =
    company.averageSalary !== null
      ? `Vidutiniskai darbuotojai uzdirba ${company.averageSalary} atlygi.`
      : "Deja, imone neskelbia vidutinio atlygio.";
  console.log(
    `Imone pavadinimu ${company.company} turi ${company.employees} darbuotojus. ${averageSalary}`
  );
});

function findMaxTransport(array) {
  let maxValue = 0;
  array.map((el) => {
    maxValue = Math.max(maxValue, el.transport);
  });
  let maxObjectIndex = array.findIndex((el) => el.transport === maxValue);

  return maxObjectIndex;
}

function findMaxWithReduce(array) {
  const maxValue = array.reduce((maxTransport, currentTransport) => {
    if (
      maxTransport.transport === undefined ||
      maxTransport.transport < currentTransport.transport
    ) {
      return currentTransport;
    }
    return maxTransport;
  }, {});
  return maxValue;
}

// let companyIndex = findMaxTransport(companies);
// console.log(
//   "Daugiausiai transporto priemoniu turi imone",
//   companies[companyIndex].company,
//   "tas kiekis yra",
//   companies[companyIndex].transport
// );
