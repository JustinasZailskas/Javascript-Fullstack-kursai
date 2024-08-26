// 24.Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą. Ji turėtų rasti ir
// grąžinti ilgiausią žodį masyve. Už funkcijos ribų susikurkite žodžių masyvą.
// Iškvieskite funkciją perduodant jai žodžių masyvą. Gautą atsakymą išveskite, taip
// pat, nurodykite šio žodžio ilgį.

function findLongestWord(wordArray) {
  let longestWord = "";
  for (const word of wordArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
let wordArray = [
  "Zalgiris",
  "Rytas",
  "Neptunas",
  "Lietkabelis",
  "Siauliai",
  "Wolves",
];
let longestWord = findLongestWord(wordArray);
console.log(
  "Ilgiausias zodis yra",
  longestWord,
  "jo ilgis",
  longestWord.length,
  "simboliu"
);
