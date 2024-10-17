const fs = require("fs");

const path = "simple_directory";

fs.mkdir(path, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Direktorija sekmingai sukurta");
});
