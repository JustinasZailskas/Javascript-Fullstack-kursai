let number1 = 36;
let number2 = 36;
let number3 = 24;

// 1. Ar pirmas skaičius didesnis už antrą?
if (number1 > number2) {
  console.log("Pirmas skaicius didesnis");
} else {
  console.log("Pirmas skaicius mazesnis");
}
// 2. Ar antras skaičius didesnis už trečią?
if (number2 > number3) {
  console.log("Antras skaicius didesnis");
} else {
  console.log("Antras skaicius mazesnis");
}

// 3. Ar trečias skaičius didesnis už pirmą?
if (number3 > number1) {
  console.log("Trecias skaicius didesnis");
} else {
  console.log("Trecias skaicius mazesnis");
}
// 4. Ar pirmi du skaičiai yra lygūs?
if (number1 === number2) {
  console.log("Pirmi du skaiciai yra lygus");
} else {
  console.log("Pirmas ir antras skaiciai nera lygus");
}
// 5. Ar paskutiniai du skaičiai yra lygūs?

if (number2 === number3) {
  console.log("Paskutiniai du skaiciai yra lygus");
} else {
  console.log("Paskutiniai du skaiciai nera lygus");
}
// 6. Ar pirmas skaičius yra lygus 0?

if (number1 === 0) {
  console.log("Pirmas skaicius lygus 0");
} else {
  console.log("Pirmas skaicius nera lygus 0");
}
// 7. Ar antras skaičius neigiamas?

if (number2 < 0) {
  console.log("Antras skaicius yra neigiamas");
} else {
  console.log("Antras skaicius yra teigiamas");
}
// 8. Ar trečias skaičius teigiamas?
if (number3 >= 0) {
  console.log("Trecias skaicius yra teigiamas");
} else {
  console.log("Trecias skaicius yra neigiamas");
}
