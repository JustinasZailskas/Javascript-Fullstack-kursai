// // 1. Išveskite visus skaičius nuo 1 iki 20.
let i = 0;
// while (i < 20) {
//    i++;
//   console.log(i);
// }
// // 2. Išveskite visus skaičius nuo 1 iki 50. Prie kiekvieno lyginio skaičiaus
// // parašykite žodį „lyginis“, o prie kiekvieno nelyginio – „nelyginis“.
// let a = 1;
// while (a <= 50) {
//   if (a % 2 === 0) {
//     console.log(a, " - lyginis");
//   } else {
//     console.log(a, " - nelyginis");
//   }
//   a++;
// }
// // 3. Išveskite visus skaičius nuo 25 iki 50. Vietoj skaičių, kurie dalinasi iš 3
// // išveskite tekstą „skaičius {skaičius} dalinasi iš 3“.
// let b = 25;
// while (b <= 50) {
//   if (b % 3 === 0) {
//     console.log("skaičius {skaičius} dalinasi iš 3");
//   } else {
//     console.log(b);
//   }
//   b++;
// }
// // 4. Išvedinėkite visus skaičius nuo 1 iki tol kol pasitaikys skaičius, kuris dalinasi
// // iš 3 ir iš 5.
// let c = 0;
// while (true) {
//   c++;
//   if (c % 3 === 0 && c % 5 === 0) {
//     break;
//   } else {
//     console.log(c);
//   }
// }
// // 5. Iš skaičių nuo 1 iki 100, raskite visų lyginių skaičių sumą.
// let suma = 0;
// while (i < 100) {
//   i++;
//   suma += i;
// }
// console.log("Suma iki 100 su while", suma);

// 6. Žemiau parodytą pavyzdį pakeiskite taip, kad toje pačioje eilutėje išvestų
// ne tik skaičių, bet ir jo kvadratą:
let skaicius = 1;

while (skaicius < 5) {
  console.log(skaicius, Math.pow(skaicius, 2));
  skaicius++;
}

// 7. Išveskite atsitiktinį kiekį atsitiktinių skaičių.

let random_num = Math.round(Math.random() * 100);
console.log(random_num);

// 8. Išveskite atsitiktinį kiekį atsitiktinių skaičių. Raskite šių skaičių sumą.
let random_num_sum = 0;
while (i < random_num) {
  i++;
  random_num_sum += i;
}
console.log(random_num_sum);
