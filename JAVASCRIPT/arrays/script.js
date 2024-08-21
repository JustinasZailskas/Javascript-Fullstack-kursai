// 1. Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą
// ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame
// masyve yra narių.
let array_list = [18, 19, 20, 21, 22, 23];
console.log("Masyvo pirmasis elementas: ", array_list[0]);
console.log("Masyvo paskutinis elementas: ", array_list[array_list.length - 1]);
console.log("Masyvo vienas is viduriniu skaiciu: ", array_list[2]);
console.log("Masyvo vienas is viduriniu skaiciu: ", array_list[3]);
console.log("Masyvo ilgis: ", array_list.length);

// // 2. Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo
// // informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite
// // pakeisto masyvo informaciją.
// let my_array = ["BMW M1", "BMW M2", "BMW 3er", "BMW 4er", "BMW 5er"];

// for (let i = 0; i < my_array.length; i++) {
//   console.log(my_array[i]);
// }
// for (let i = my_array.length; i > my_array.length - 3; i--) {
//   let new_value = `BMW M${i}`;
//   my_array[i - 1] = new_value;
// }
// console.log("Po masyvo atnaujinimo");
// for (let i = 0; i < my_array.length; i++) {
//   console.log(my_array[i]);

// // 3. Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis
// // naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.
// let empty_array = [];
// console.log("Pries ivedant ", empty_array);
// empty_array.push(2);
// empty_array.push(5);
// empty_array.push(6);
// empty_array.push(7, 8, 9);

// console.log("Iterpus elementus", empty_array);
// 4. Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais
// skaičiais. Išveskite šio masyvo informaciją.
let array = [];

let random_num = Math.round(Math.random() * 100);
let random_num2 = Math.round(Math.random() * 100);
let random_num3 = Math.round(Math.random() * 100);
let random_num4 = Math.round(Math.random() * 100);
array.push(random_num, random_num2, random_num3, random_num4);
console.log(array);

// 5. Sukurkite du masyvus dviejų studentų pažymiams saugoti. Įveskite po 3-5
// pažymius kiekvienam studentui (iškart kuriant masyvus arba per push
// funkciją). Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio
// studento vidurkis didesnis ir išveskite atsakymą.

let student1_marks = [8, 6, 10];
let student2_marks = [8, 6, 10];

let student1_average =
  (student1_marks[0] + student1_marks[1] + student1_marks[2]) /
  student1_marks.length;
let student2_average =
  (student2_marks[0] + student2_marks[1] + student2_marks[2]) /
  student2_marks.length;

console.log("Pirmo studento vidurkis: ", student1_average);
console.log("Antro studento vidurkis: ", student2_average);

if (student1_average === student2_average) {
  console.log("Studentu vidurkiai lygus");
} else {
  console.log(
    student1_average > student2_average
      ? "Pirmo studento vidurkis didesnis"
      : "Antro studento vidurkis didesnis"
  );
}
console.log(
  student1_average > student2_average
    ? "Pirmo studento"
    : student1_average < student2_average
    ? "Antro studento"
    : "Lygus"
);
if (student1_average > student2_average) {
  console.log("Pirmo studento didesnis");
} else if (student1_average < student2_average) {
  console.log("Antro studento vidurkis didesnis");
} else {
  console.log("Studentu vidurkiai yra lygus");
}
