// 13.Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje
// išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį
// (simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį
// duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.
function printWords(array) {
  for (let i = 0; i < array.length; i++) {
    let wordLength = array[i].length;
    console.log("Zodis: ", array[i], "jis turi", wordLength, "simbolius");
  }
}
let wordArray = [
  "Zalgiris",
  "Rytas",
  "Neptunas",
  "Lietkabelis",
  "Siauliai",
  "Wolves",
];
printWords(wordArray);
