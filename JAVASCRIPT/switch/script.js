// 1. Susikurkite kintamąjį pasirinkimui saugoti, į jį įrašykite norimą reikšmę.
// Tikrinkite:
// 1. Ar pasirinkimas lygus 1? Jei taip, išveskite, kad vartotojas laimėjo vandens.
// 2. Ar pasirinkimas lygus 2? Jei taip, išveskite, kad vartotojas laimėjo limonadą.
// 3. Ar pasirinkimas lygus 3? Jei taip, išveskite, kad vartotojas laimėjo arbatą.
// 4. Ar pasirinkimas lygus 4? Jei taip, išveskite, kad vartotojas laimėjo kavą.
// 5. Jei pasirinkimas neegzistuoja, išveskite klaidos pranešimą.
let number = 3;

switch (number) {
  case 1:
    console.log("Jus laimejote vandens");
    break;
  case 2:
    console.log("Jus laimejote limonada");
    break;
  case 3:
    console.log("Jus laimejote arbata");
    break;
  case 4:
    console.log("Jus laimejote kava");
    break;
  default:
    console.log("Deja, jus nieko nelaimejote");
    break;
}

// 2. Susikurkite kintamuosius trims skaičiams saugoti ir priskirkite jiems
// reiškmes. Tikrinkite pirmą skaičių:
// 1. Ar pirmas skaičius lygus 1? Jei taip, išvesti visų trijų skaičių sumą.
// 2. Ar pirmas skaičius lygus 2? Jei taip, išvesti antro ir trečio skaičių sandaugą.
// 3. Ar pirmas skaičius lygus 3? Jei taip, išvesti pirmo skaičiaus kvadratą.
// 4. Jei nei vienas variantas netinka, išveskite klaidos pranešimą.

let int1 = 4;
let int2 = 14;
let int3 = 32;

switch (int1) {
  case 1:
    let suma = int1 + int2 + int3;
    console.log("Visu triju skaiciu suma: ", suma);
    break;
  case 2:
    let sandauga = int2 * int3;
    console.log("Sandauga antro ir trecio skaiciaus: ", sandauga);
    break;
  case 1:
    let kvadratas = Math.pow(int1, 2);
    console.log("Pirmo skaiciaus kvadratas: ", kvadratas);
    break;
  default:
    console.log("Klaidos pranesimas");
    break;
}

// 3. Susikurkite kintamąjį klaidos kodui saugoti, jam priskirkite kokį nors
// klaidos kodą. Tikrinkite koks tai klaidos kodas (bent 3 skirtingus variantus),
// ties kiekvienu jų išveskite skirtingą tekstą, nurodantį, kad bus atliekami
// skirtingi veiksmai.

let error_message = "NCBE";

switch (error_message) {
  case "EaVA":
    console.log("Enter a valid address");
    break;
  case "PEVP":
    console.log("Please enter valid password");
    break;
  case "NCBE":
    console.log("Name cannot be empty");
    break;
  default:
    console.log("Error message");
}
