const fs = require("fs");

const zinute = "Labas pasauli";
fs.writeFile("writeFile.txt", zinute, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Sekmingai tekstas ${zinute} issaugota faile write_file.txt`);
});
