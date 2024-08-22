// Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte
// sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas,
// turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite
// visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje
// (pirma prekė kainuoja - ..., antra prekė kainuoja - ..., ir t.t.). Raskite ir
// išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą
// rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos
// prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės
// pelningumą ((kaina - savikaina) * kiekis sandėlyje).
let item1 = {
  title: "R17 ratlankis",
  price: 79,
  cost: 53,
  code: "6783681STYLE285",
  quantity: 8,
  boxDimensions: [70, 70, 15],
};
let item2 = {
  title: "Ratlankiu slapukai",
  price: 30,
  cost: 20,
  code: "6783681Slapukai",
  quantity: 3,
  boxDimensions: [15, 20, 5],
};
let item3 = {
  title: "Porankis",
  price: 60,
  cost: 45,
  code: "7075357",
  quantity: 3,
  boxDimensions: [118, 25, 35],
};

console.log(item1);
console.log(item2);
console.log(item3);

console.log(
  "Pirma preke kainuoja:",
  item1.price,
  " antra preke kainuoja:",
  item2.price,
  "trecia preke kainuoja:",
  item3.price
);

let expensiveItem = {};

if (item1.price > item2.price && item1.price > item3.price) {
  expensiveItem = item1;
} else if (item2.price > item1.price && item2.price > item3.price) {
  expensiveItem = item2;
} else if (item3.price > item1.price && item3.price > item2.price) {
  expensiveItem = item3;
} else {
  expensiveItem = {
    price: "Yra vienoda kaina turinciu prekiu",
  };
}

console.log(
  "Brangiausia preke yra",
  expensiveItem.title,
  "jos kaina",
  expensiveItem.price
);
let boxsize1 = item1.boxDimensions;
let boxsize2 = item2.boxDimensions;
let boxsize3 = item3.boxDimensions;
let capacity1 = boxsize1[0] * boxsize1[1] * boxsize1[2];
let capacity2 = boxsize2[0] * boxsize2[1] * boxsize2[2];
let capacity3 = boxsize3[0] * boxsize3[1] * boxsize3[2];
console.log("Pirmos prekes dezes turis kubiniais centimetrais", capacity1);
console.log("Antros prekes dezes turis kubiniais centimetrais", capacity2);
console.log("Trecios prekes dezes turis kubiniais centimetrais", capacity3);

let profit1 = (item1.price - item1.cost) * item1.quantity;
let profit2 = (item2.price - item2.cost) * item2.quantity;
let profit3 = (item3.price - item3.cost) * item3.quantity;
console.log("Pirmos prekes pelningumas", profit1);
console.log("Antros prekes pelningumas", profit2);
console.log("Trecios prekes pelningumas", profit3);
