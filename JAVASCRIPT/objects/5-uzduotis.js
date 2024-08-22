// 5. Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su
// reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys).
// Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai,
// spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio
// informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis
// įrašykite dabartinius metus arba panaudokite new
// Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek
// vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300
// kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.).
let car = {};

car.make = "BMW";
car.model = "320D";
car.mileage = 292458;
car.year = 2010;
car.color = "black";
car.damaged = true;
car.sale = false;

console.log(car);
let carYear = new Date(Date.now()).getFullYear() - car.year;
console.log("Autmobiliui yra ", carYear, "metu");
let mileagePerYear = Math.round(car.mileage / carYear, 0);
console.log("Automobilis per metus vidutiniskai nuvaziuoja", mileagePerYear);
