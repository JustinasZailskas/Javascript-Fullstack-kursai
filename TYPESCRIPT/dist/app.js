"use strict";
//Pirma uzduotis
console.log("Pirma uzduotis");
let firstname = "Justinas";
let age = 33;
console.log(`${firstname} ${age}`);
console.log("-------------------");
//Antra uzduotis
console.log("Antra uzduotis");
let anyParam = 15;
console.log("Any param tipas prazdioje", typeof anyParam);
anyParam = "Jau string tipas";
console.log("Any param tipas po kintamojo naujo priskyrimo", typeof anyParam);
console.log("-------------------");
//Trecia uzduotis
console.log("Trecia uzduotis");
function keistiTipa(metai) {
    if (typeof metai === "string") {
        return parseInt(metai);
    }
    else {
        return metai.toString();
    }
}
const pirmiMetai = keistiTipa(1998);
const antriMetai = keistiTipa("2024");
console.log(pirmiMetai, antriMetai);
console.log("----------------------");
//Ketvirta uzduotis
console.log("Ketvirta uzduotis");
let drivers = [];
function addDriver(driver) {
    drivers.push(driver);
    console.log(`Sekmingai pridetas vairuotojas: ${driver.fullname}`);
}
addDriver({ fullname: "Robertas Salkauskas", car: "Nissan Skyline" });
addDriver({ fullname: "Aivaras Maciulevicius", car: "BMW E46" });
addDriver({ fullname: "Gustas Valainis", car: "BMW E46" });
addDriver({ fullname: "Povilas Basevicius", car: "BMW E46 330i" });
function removeDriver(fullname) {
    const index = drivers.findIndex((driver) => driver.fullname === fullname);
    if (index !== -1) {
        drivers.splice(index, 1);
        console.log("Pasalintas vairutojas " + fullname + " is indekso " + index);
    }
    else {
        console.log("Nerastas vairuotojas [" + fullname + "]");
    }
}
removeDriver("Jaunius Plautis");
function displayDriver() {
    console.log("Vairuotoju sarasas ", drivers.map((driver) => driver.fullname));
    console.log("Vairuotoju sarasas");
    drivers.map((driver) => {
        console.log(`  Vairuotojas ${driver.fullname} ir jo automobilis ${driver.car}`);
    });
}
displayDriver();
removeDriver("Povilas Basevicius");
displayDriver();