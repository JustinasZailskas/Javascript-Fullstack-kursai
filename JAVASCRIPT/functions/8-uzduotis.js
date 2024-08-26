// 8. Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų
// sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją
// cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių.
console.log("________8 uzduotis_______");
function randomNumber() {
  let randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}

let i = 0;
while (i < 10) {
  console.log(i + 1, "skaicius yra lygus: ", randomNumber());
  i++;
}
console.log("_________________________");
