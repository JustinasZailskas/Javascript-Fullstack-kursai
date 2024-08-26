// 19.Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį.
// Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį
// 8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų,
// perduodant vis skirtingus duomenis. Gautus atsakymus išveskite.

function getStudentData(name, average) {
  let result = `Studentas ${name} turi vidurki ${average}`;
  return result;
}

console.log(getStudentData("Petras", 7.8));
console.log(getStudentData("Antanas", 8.8));
console.log(getStudentData("Aloyzas", 9.8));
