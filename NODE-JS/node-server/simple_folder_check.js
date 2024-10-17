const fs = require("fs");

const path = "./simple_directory";

if (!fs.existsSync(path)) {
  fs.mkdir(path, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Direktorija sekmingai sukurta");
  });
} else {
  console.log("Katalogas jau yra");
}
