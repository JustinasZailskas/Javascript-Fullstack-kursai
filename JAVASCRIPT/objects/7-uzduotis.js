// Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek
// turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto
// raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių
// reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.).

let bookStore = {
  title: "Vienaragis",
  address: "Zirmunu g. 64, Vilnius, Lithuania",
  area: 900,
  quatityOfBooks: 1342,
  openHours: "8 - 17",
  isOpening: true,
};

for (const property in bookStore) {
  console.log(property, ":", bookStore[property]);
}
console.log("__________Savybes kurios ne yra ne string tipo");
for (const property in bookStore) {
  if (typeof bookStore[property] !== "string") {
    console.log(property);
  }
}
