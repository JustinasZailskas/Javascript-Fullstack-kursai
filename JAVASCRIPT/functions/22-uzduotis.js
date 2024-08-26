// 22.Susikurkite bent 3 matematines funkcijas, priimančias reikiamus
// argumentus (pvz suma iš dviejų skaičių, suma iš trijų skaičių, skirtumas,
// sandauga, dalyba) ir grąžinančias atitinkamus atsakymus. Taip pat,
// susikurkite funkciją, kurioje būtų sugeneruojamas reikiamas kiekis
// atsitiktinių skaičių ir išvedami visų skaičiavimų atsakymai su veiksmais
// (iškviečiant atitinkamas kitas funkcijas ir perduodant reikiamus
// kintamuosius) (pagal 23 pavyzdį). Iškvieskite šią pagrindinę funkciją bent
// kartą.

function addition(number1, number2) {
  return number1 + number2;
}
function additionBy3Numbers(number1, number2, number3) {
  return number1 + number2 + number3;
}
function multiply(number1, number2) {
  return number1 * number2;
}

function getRandomNumber() {
  let randomNum = Math.floor(Math.random() * 100);
  return randomNum;
}
function useFunctions() {
  let num1 = getRandomNumber();
  let num2 = getRandomNumber();
  let num3 = getRandomNumber();
  console.log(
    `Skaciu ${num1} ir ${num2} sudetis yra lygi ${addition(num1, num2)}`
  );
  console.log(
    `Triju skaicius ${num1}, ${num2} ir ${num3} sudetis lygi ${additionBy3Numbers(
      num1,
      num2,
      num3
    )}`
  );
  console.log(
    `Dvieju skaiciu ${num1} ir ${num2} saundauga lygi ${multiply(num1, num2)}`
  );
}
useFunctions();
