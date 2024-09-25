fetch("https://jsonplaceholder.typicode.com/users/4")
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });

function getText() {
  console.log("Mygtukas paspaustas");
  setTimeout(() => {
    const element = document.createElement("h5");
    element.textContent = "Tekstas";
    document.getElementById("div").appendChild(element);
  }, 2000);
}

document.getElementById("addButton").addEventListener("click", () => {
  getText();
});

function getData() {
  fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
}

document.getElementById("getDataButton").addEventListener("click", () => {
  getData();
});

let randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

function getArrayEvenOddNumbers(array, isEvenOddNumber) {
  array.forEach((number) => {
    isEvenOddNumber(number);
  });
}
function isEvenOddNumber(number) {
  if (number % 2 === 0) {
    console.log(`Skaicius ${number} yra lyginis`);
  } else {
    console.log(`Skaicius ${number} yra nelyginis`);
  }
}
document.getElementById("trecia").addEventListener("click", () => {
  getArrayEvenOddNumbers(randomArray, isEvenOddNumber);
});

let stringArray = [
  "Pirmadienis",
  "Antradienis",
  "Treciadienis",
  "Savaite",
  "Zalgiris",
];

function patikrinkZodzioIlgi(masyvas, callbackFunkcija) {
  masyvas.forEach((zodis) => {
    callbackFunkcija(zodis);
  });
}

function koksIlgis(zodis) {
  console.log(`Zodzio ${zodis} ilgis yra ${zodis.length}`);
}

patikrinkZodzioIlgi(stringArray, koksIlgis);

const cars = [
  {
    make: "BMW",
    model: "320D",
    year: 2010,
    milleage: 293000,
    price: 4700,
  },
  {
    make: "BMW",
    model: "330e",
    year: 2017,
    milleage: 147000,
    price: 17700,
  },
];

function getCarsInformation(array, callbackFunction) {
  let newArray = [];
  array.forEach((element) => {
    newArray.push(callbackFunction(element));
  });
  console.log(newArray);
}

function setCarData(car) {
  let carObj = {
    make: car.make,
    model: car.model,
  };
  return carObj;
}

getCarsInformation(cars, setCarData);
