// 12.Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis.
// Išveskite visų prekių pavadinimus su kainomis ir dar kokiais nors atributais
// atskirose eilutėse.

let products = [
  {
    title: "Produktas1",
    category: "kategorija2",
    price: 19,
    quantity: 103,
  },
  {
    title: "Produktas2",
    category: "kategorija2",
    price: 129,
    quantity: 24,
  },
  {
    title: "Produktas3",
    category: "kategorija3",
    price: 64,
    quantity: 14,
  },
];

for (const product of products) {
  console.log("_______________________");
  console.log(
    `Produktas ${product.title}, priklauso ${product.category}. Sio produkto kaina: ${product.price}€`
  );
}
