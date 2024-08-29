function main(param, callback) {
  for (let i = 0; i < param.length; i++) {
    callback(param[i], i);
  }
}
let arr = ["a", "b", "c"];

main(arr, (variable, index) => {
  console.log("this is my callback", variable, index);
});

arr.forEach((el, index) => {
  console.log("Elementas", el, "jo indeksas: ", index);
});
