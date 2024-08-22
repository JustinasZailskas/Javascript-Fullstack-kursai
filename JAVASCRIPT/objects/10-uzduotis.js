// 10.Pagal 18-ą pavyzdį, pritaikykite skriptą prie kitos esybės. Išveskite visą
// objekto informaciją per atskirą nuo objekto console.log(), taip pat, išveskite
// tam tikrą pasirinktą informaciją pasinaudojant funkcija/metodu iš objekto.

let car = {
  make: "BMW",
  model: "M3",
  price: 85799,
  quantity: 4,
  profit: function () {
    console.log(
      "Pardavus visus automibilius imone gautu tiek iplauku",
      this.price * this.quantity
    );
  },
};

console.log("Automibilis", car);
car.profit();
