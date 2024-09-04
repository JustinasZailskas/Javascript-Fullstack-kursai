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
