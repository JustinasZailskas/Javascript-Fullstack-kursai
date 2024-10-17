const fs = require("fs");

const directory = "./simpleDirectory";
const filePath = `${directory}/failas.txt`;

function createDirectory() {
  if (!fs.existsSync(directory)) {
    fs.mkdir(directory, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Direktorija sekmingai sukurta");
    });
  }
  console.log("Katalogas jau yra yra");
}

function createFile() {
  if (!fs.existsSync(filePath)) {
    const zinute = "Labas pasauli";

    fs.writeFile(filePath, zinute, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Sekmingai tekstas ${zinute} issaugota faile failas.txt`);
    });
    return;
  }
  console.log(`${filePath} failas jau yra`);
}

try {
  createDirectory();
  createFile();
} catch {
  console.log(err);
}
