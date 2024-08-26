// 12.Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du
// skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias
// pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną
// funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas,
// perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą
// kartų.
console.log("_________12 uzduotis_________");
function addition(number1, number2) {
  let result = number1 + number2;
  console.log(`Sudeties veiksmas ${number1}+${number2}=${result}`);
}
function subtraction(number1, number2) {
  let result = number1 - number2;
  console.log(`Atimties veiksmas ${number1}-${number2}=${result}`);
}
function multiplication(number1, number2) {
  let result = number1 * number2;
  console.log(`Daugybos veiksmas ${number1}*${number2}=${result}`);
}
function division(number1, number2) {
  let result = number1 / number2;
  console.log(`Dalybos veiksmas ${number1}/${number2}=${result}`);
}
function actionWithNumbers() {
  let num1 = Math.round(Math.random() * 100);
  let num2 = Math.round(Math.random() * 100);
  addition(num1, num2);
  subtraction(num1, num2);
  multiplication(num1, num2);
  division(num1, num2);
}
actionWithNumbers();
actionWithNumbers();
actionWithNumbers();
console.log("________________________");
