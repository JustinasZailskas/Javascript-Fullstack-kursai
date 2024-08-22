let books = [
  {
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
    year: 2010,
    isBookstore: true,
  },
  {
    title: "Lemtingi sprendimai",
    author: "Robertas Petrauskas",
    genre: "Historical",
    price: 39,
    pageNumber: 670,
    chapters: [
      "Sprendimai",
      "Paskutines vilties sala",
      "Komplikacijos Siaures Afrikoje ir Balkanuose",
      "Didziosios iliuzijos",
    ],
    year: 2014,
    isBookstore: true,
  },
  {
    title: "Barbarosa",
    author: "Robertas Petrauskas",
    genre: "Historical",
    price: 80,
    pageNumber: 718,
    chapters: ["Birzelio 22-oji", "Pasienio musiai", "Kruvina liepa"],
    year: 2018,
    isBookstore: true,
  },
];

for (const book of books) {
  console.log("______________________");
  for (const property in book) {
    if (property === "title" || property === "author" || property === "genre") {
      console.log(property, ":", book[property]);
    }
  }
  console.log("______________________");
}
