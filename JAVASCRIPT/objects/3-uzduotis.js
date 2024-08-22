// 3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename
// objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius,
// žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais),
// išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų
// informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei
// kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos
// kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?

let book1 = {
  title: "Treciojo Reicho triumfas",
  author: "Robertas Petrauskas",
  genre: "Historical",
  price: 30,
  pageNumber: 671,
  chapters: [
    "Versalio sutartis - Naujosios Europos vizija ir taika visiems laikams",
    "Hitlerio suolis i valdzia",
    "Ein Volk, ein Reich, ein Fuhrer",
    "I pavojinga zona izengiant",
  ],
  year: 2019,
  isBookstore: true,
};
let book2 = {
  title: "Barbarosa",
  author: "Robertas Petrauskas",
  genre: "Historical",
  price: 80,
  pageNumber: 718,
  chapters: ["Birzelio 22-oji", "Pasienio musiai", "Kruvina liepa"],
  year: 2019,
  isBookstore: true,
};

console.log("Informacija apie pirma knyga");
for (const property in book1) {
  if (property === "isBookstore") {
    console.log(
      "Can I find book in the bookstore?",
      book1[property] === true ? "Yes" : "No"
    );
  } else {
    console.log(`${property}: ${book1[property]}`);
  }
}
console.log("Informacija apie antra knyga");
for (const property in book2) {
  if (property === "isBookstore") {
    console.log(
      "Can I find book in the bookstore?",
      book2[property] === true ? "Yes" : "No"
    );
  } else {
    console.log(`${property}: ${book1[property]}`);
  }
}

if (book1.pageNumber > book2.pageNumber) {
  console.log("Pirma knyga turi daugiau puslapiu");
} else {
  console.log("Antra knyga turi daugiau puslapiu");
}
if (book1.chapters.length > book2.chapters.length) {
  console.log("Pirma knyga turi daugiau skyriu");
} else {
  console.log("Antra knyga turi daugiau skyriu");
}
let highBookIndex = 0;
if (book1.price > book2.price) {
  highBookIndex = 1;
} else {
  highBookIndex = 2;
}
console.log(highBookIndex);
if (highBookIndex === 1) {
  book2.price * 2 > book1.price
    ? console.log("Brangesne butu jei antra knygos kaina padvigubiname")
    : console.log("Pigesne antra knyga isliktu");
} else {
  book1.price * 2 > book2.price
    ? console.log("Brangesne butu jei pirmos knygos kaina padvigubinta")
    : console.log("Pigesne pirma knyga isliktu");
}
