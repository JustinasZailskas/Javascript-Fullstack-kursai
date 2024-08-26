// 20.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti
// duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už
// funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje
// iškvieskite šią funkciją, perduodant ciklo kintamąjį.

function findSmallestDivisor(number) {
  let divisorArray = [];
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      divisorArray.push(i);
    }
  }
  let minValue = Infinity;
  for (let i = 0; i < divisorArray.length; i++) {
    if (divisorArray[i] < minValue) {
      minValue = divisorArray[i];
    }
  }
  return minValue;
}

for (let i = 10; i <= 30; i++) {
  console.log(`Skaiciaus ${i} maziausias daliklis ${findSmallestDivisor(i)}`);
}
