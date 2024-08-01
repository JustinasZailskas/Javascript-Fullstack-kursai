//uzduotis 1/3
let number1 = 4;
let power2 = number1 * number1;
let power3 = number1 * number1 * number1;
console.log(power2);
console.log(power3);
//uzduotis 2/3
let number_a = 4;
let number_b = 5;

console.log("Sudetis: ", number_a + number_b);
console.log("Skirtumas: ", number_a - number_b);
console.log("Sandauga ", number_a * number_b);
console.log("dalyba ", number_a / number_b);

console.log(-1 + 4 * 6);
console.log((35 + 5) % 7);
console.log(14 + (-4 * 6) / 12);
console.log(2 + (15 / 6) * 1 - (7 % 2));
//uzduotis 3/3
let i = 1;
let number_c = 6;
while (i <= 10) {
  console.log(
    `Skaiciaus ${number_c} daugyba is ${i}. Atsakymas ${number_c * i}`
  );
  i++;
}

let inserted_value = 99;

let first_value_number = Math.floor(inserted_value / 10);
let second_value_number = inserted_value % 10;
let result = first_value_number + second_value_number;
console.log(result);
