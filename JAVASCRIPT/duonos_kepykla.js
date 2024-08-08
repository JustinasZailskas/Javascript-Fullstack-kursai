const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let hoursOfDay = 8;
let employeesNumber;
let breadNumberPerHour;
let breadCost;
let breadPrice;
let breadNumberOfOrder;

rl.question(
  `Iveskite kepalu kieki kiek darbuotojas ju iskepa per valanda `,
  (value) => {
    breadNumberPerHour = parseInt(value);
    rl.question(`Iveskite kiek darbuotoju turi kepykla `, (value) => {
      employeesNumber = parseInt(value);
      rl.question(`Kokia vieno kepalo savikaina? `, (value) => {
        breadCost = parseFloat(value);
        rl.question(`Kokia vieno kepalo pardavimo kaina? `, (value) => {
          breadPrice = parseFloat(value);
          rl.question(
            `Kiek kepykla turi ta diena iskepti kepalu? `,
            (value) => {
              breadNumberOfOrder = parseInt(value);
              let breadsPerDay =
                hoursOfDay * employeesNumber * breadNumberPerHour;
              let isOrderCompleted = breadsPerDay >= breadNumberOfOrder;
              switch (isOrderCompleted) {
                case true:
                  let incomesPerDay = breadNumberOfOrder * breadPrice;
                  let profitPerDay =
                    incomesPerDay - breadNumberOfOrder * breadCost;
                  console.log("Dienos uzsakymas bus ivykdytas.");
                  console.log(
                    `Dienos pajamos yra ${incomesPerDay}€, o pelnas ${profitPerDay}€`
                  );
                  break;
                case false:
                  let numberOfIncompletedBread =
                    breadNumberOfOrder - breadsPerDay;
                  console.log(`Dienos usakymas nebus ivykdytas.`);
                  console.log(
                    `Uzsakymui ivykdyti truksta ${numberOfIncompletedBread} duonos kepalu`
                  );
                  break;
                default:
                  console.log("Klaida");
              }
              rl.close();
            }
          );
        });
      });
    });
  }
);
