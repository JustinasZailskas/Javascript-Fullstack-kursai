//pirmas div
document.getElementById("pirma-antraste").textContent =
  "Naujas pirmos antrastes tekstas";
document.getElementById("pirmas-paragrafas").textContent =
  "Naujas pakeistas pirmo paragrafo tekstas";
//antras div

console.log("Antras div");
let tekstasIsParagrafo = document.getElementById("paragrafo-tekstas").innerHTML;
console.log("Tekstas paimtas su innerHTML", tekstasIsParagrafo);

let tekstasIsParagrafo2 =
  document.getElementById("paragrafo-tekstas").innerText;
console.log("Tekstas paimtas su innertext", tekstasIsParagrafo2);
let tekstasIsParagrafo3 =
  document.getElementById("paragrafo-tekstas").textContent;
console.log("tekstas paimtas su textContent", tekstasIsParagrafo3);

//trecias div
console.log("trecias div");
console.log(
  "innerHtml turinys: ",
  document.getElementById("trecias").innerHTML
);
console.log("innerText turinys:", document.getElementById("trecias").innerText);

//ketvirtas div
let changed = false;
function changeText() {
  let mygtukoTekstas = document.getElementById(
    "paragrafas-pakeitimui"
  ).textContent;
  if (changed === false) {
    document.getElementById("paragrafas-pakeitimui").innerHTML =
      "Pakeistas paragrafo tekstas";
    changed = true;
  } else {
    document.getElementById("paragrafas-pakeitimui").innerHTML =
      "Nepakeistas paragrafo tekstas";
    changed = false;
  }
  console.log(mygtukoTekstas);
}

//penktas div
function changeFontSize() {
  document.getElementById("paragrafas-5").style.fontSize = "35px";
}
function changeFontColor() {
  document.getElementById("paragrafas-5").style.color = "green";
}

//septintas div
function pakeisti() {
  document.getElementById("septinto-tekstas").textContent =
    "Cia yra naujas tekstas";
}

//astuntas div
function pakeisti2(elementas, tekstas) {
  document.getElementById(elementas).textContent = tekstas;
}

//devintas div
function pakeisti3(elementas, tekstas) {
  document.getElementById(elementas).textContent = tekstas;
}
function kitaSpalva(elementas, spalva) {
  document.getElementById(elementas).style.color = spalva;
}

//desimtas div
let pirmas = 8;
let antras = 4;

let suma = pirmas + antras;
let skirtumas = pirmas - antras;
let sandauga = pirmas * antras;
let dalmuo = pirmas / antras;

document.getElementById("suma").textContent =
  pirmas + " + " + antras + " = " + suma;
document.getElementById("skirtumas").textContent =
  pirmas + " - " + antras + " = " + skirtumas;
document.getElementById("daugyba").textContent =
  pirmas + " * " + antras + " = " + sandauga;
document.getElementById("dalmuo").textContent =
  pirmas + " / " + antras + " = " + dalmuo;

//vienuoliktas div
pirmas = 10;
antras = 5;

let rezultatas = `<p>${pirmas} + ${antras} = ${pirmas + antras}</p>
<p>${pirmas} - ${antras} = ${pirmas - antras}</p>
<p>${pirmas} * ${antras} = ${pirmas * antras}</p>
<p>${pirmas} / ${antras} = ${pirmas / antras}</p>
`;

document.getElementById("vienuolikto-turinys").innerHTML = rezultatas;

//dvyliktas div

function keistiSpalva(elementas, spalva) {
  document.getElementById(elementas).style.color = spalva;
}
function keistiDydi(elementas, dydis) {
  document.getElementById(elementas).style.fontSize = dydis + "px";
}
