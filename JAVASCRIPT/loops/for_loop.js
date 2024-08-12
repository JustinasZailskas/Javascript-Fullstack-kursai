// 1. Parašyti for, kuris išvestų kiekvieną skaičių pradedant nuo 0 ir baigiant 10.
for (let i = 0; i <= 10; i++) {
  console.log("Skaicius ", i);
}
// 2. Parašyti for, kuris išvestų kas antrą skaičių pradedant 0 ir baigiant 15.
for (let i = 0; i <= 15; i += 2) {
  console.log("Kas antras skaicius", i);
}
// 3. Parašyti for, kuris išvestų kas trečią skaičių, pradedant 1 ir baigiant 20.
// Kiekvieną skaičių apskliausti laužtiniais skliaustais. Pvz.: [1][4][7]...
for (let i = 1; i <= 20; i += 3) {
  console.log(`Kas trecias skaicius: [${i}]`);
}

// 4. Parašyti for, kuris eitų pro kiekvieną skaičių nuo 1 iki 20. Jame apsirašyti if
// sąlygą, kuri patikrintų ar dabartinis skaičius dalinasi iš 4, jei taip tai šį
// skaičių išvesti.
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i, "dalijasi is 4");
  }
}

// 5. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai
// būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet
// vykdyti for, kuris atskirose eilutėse išvestų kiekvieną skaičių iš tų rėžių, bei
// atskiriant tarpu - tų skaičių kvadratus.
let first_num = 2;
let second_num = 12;

if (first_num < second_num) {
  for (let i = first_num; i <= second_num; i++) {
    console.log(`Skaicius ${i} ${i * i}`);
  }
}

// 6. Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai
// būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet
// vykdyti for, kuris iš duotų skaičių išvestų visus nelyginius skaičius arba tuos,
// kurie dalinasi iš 8.
let begin_num = 5;
let end_num = 25;

if (begin_num < end_num) {
  for (let i = begin_num; i <= end_num; i++) {
    if (i % 2 === 1 || i % 8 === 0) {
      console.log("Skaicius nelyginis arba dalijasi is 8", i);
    }
  }
}
// 7. (papildomai, sunkiau) Be daugybos veiksmo programoje, sudauginti du skaičius.

let daug_num1 = 3;
let daug_num2 = 7;
let daugyba = 0;

for (let i = 1; i <= daug_num2; i++) {
  daugyba = daugyba + daug_num1;
}
console.log("Daugyba ", daugyba);

// 8. Raskite visų skaičių nuo 1 iki 100 sumą.
let suma_iki_100 = 0;
for (let i = 1; i <= 100; i++) {
  suma_iki_100 += i;
}
console.log(suma_iki_100);
// 9. Raskite visų lyginių skaičių nuo 20 iki 50 sumą.
let suma_lyginiu_20_50 = 0;
for (let i = 20; i <= 50; i++) {
  if (i % 2 === 0) {
    suma_lyginiu_20_50 += i;
  }
}
console.log(suma_lyginiu_20_50);
// 10.Raskite visų nelyginių skaičių nuo 30 iki 60 sumą.
let suma_nelyginiu_30_60 = 0;
for (let i = 30; i <= 60; i++) {
  if (i % 2 === 1) {
    suma_nelyginiu_30_60 += i;
  }
}
console.log("Nelyginiu skaiciu suma nuo 30 iki 60: ", suma_nelyginiu_30_60);
// 11.Rasti visų skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5, sumą.
// Pavyzdys:
// Visi skaičiai mažesni už 10 ir kurie dalinasi iš 3 arba 5 yra: 3, 5, 6, 9.
// Šių skaičių suma yra 23.
// Turite gauti 233168 atsakymą.
let suma_3_5 = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    suma_3_5 += i;
  }
}
console.log(
  "Skaiciu zemesniu uz 1000, kurie dalijasi is 3 ar 5 suma: ",
  suma_3_5
);
// 12.The "Fizz-Buzz test" is an interview question designed to help filter out the
// 99.5% of programming job candidates who can't seem to program their
// way out of a wet paper bag. The text of the programming assignment is as
// follows:
// "Write a program that prints the numbers from 1 to 100. But for multiples
// of three print “Fizz” instead of the number and for the multiples of five
// print “Buzz”. For numbers which are multiples of both three and five print
// “FizzBuzz”."

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    continue;
  } else if (i % 5 === 0) {
    console.log("Buzz");
    continue;
  } else if (i % 3 === 0) {
    console.log("Fizz");
    continue;
  } else {
    console.log(i);
  }
}

// 13.(sunkesnė) Parašyti for ciklą, kuris išvestų norimą kiekį fibonačiaus skaičių į
// ekraną. Fibonačiaus sekoje kiekvienas skaičius yra lygus prieš jį ėjusių
// dviejų skaičių sumai: 1, 1, 2, 3, 5, 8, 13, 21...
// 1. Susikurkite tris sveikųjų skaičių kintamuosius, kurie jums padės tai pasiekti.
// 1. Pirmi du kintamieji saugos paskutinius du skaičius.
// 2. Trečiasis bus šių pirmų dviejų skaičių suma.
// 2. Pirmus du skaičius išveskite ne cikle, o prieš jį ir ciklą pradėkite vykdyti nuo 2, o ne nuo 0.
// 3. Kiekvieno ciklo metu turite perskaičiuot trečiąjį skaičių (pirmų dviejų skaičių sudėtis), tuomet
// pirmasis skaičius yra lygus antram, o antrasis lygus trečiam, išvesti į ekraną trečią skaičių.

let fib_num1 = 1;
let fib_num2 = 1;

console.log("1-as Fibonacio skaicius", fib_num1);
console.log("2-as Fibonacio skaicius", fib_num2);
for (let i = 2; i < 10; i++) {
  let fib_next_num = fib_num1 + fib_num2;
  console.log(`${i + 1}-as Fibonacio skaicius ${fib_next_num}`);
  fib_num1 = fib_num2;
  fib_num2 = fib_next_num;
}
