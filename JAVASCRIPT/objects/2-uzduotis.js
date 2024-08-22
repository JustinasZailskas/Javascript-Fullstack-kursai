// 2. Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite
// tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek
// uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių
// sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto
// informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis -
// biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite
// kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba
// panaudoti new Date(Date.now()).getFullYear() funkciją).

let movie = {
  title: "Saving Private Ryan",
  director: "Steven Spielberg",
  budget: 70000000,
  gross: 217049603,
  genres: ["Drama", "War"],
  releaseDate: new Date("1998-07-24"),
  topCast: [
    { firstname: "Tom", lastname: "Hanks" },
    { firstname: "Matt", lastname: "Damon" },
    { firstname: "Tom", lastname: "Sizemore" },
  ],
};

console.log("Filmo pavadinimas:", movie.title);
console.log("Rezisierius:", movie.director);
let genres = "";
for (const genre of movie.genres) {
  let result = genres.concat(", ", genre);
  genres = result;
}
console.log("Zanras:", genres);
console.log("Pelnas:", movie.gross - movie.budget);
let actors = "";

for (const actor of movie.topCast) {
  let result = actors.concat(actor.firstname, " ", actor.lastname, ",");
  actors = result;
}
console.log("Aktoriai:", actors);
let filmAge =
  new Date(Date.now()).getFullYear() - movie.releaseDate.getFullYear();
console.log("Filmui metu yra: ", filmAge);
