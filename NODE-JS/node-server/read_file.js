const fs = require("fs");

fs.readFile("simple.txt", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});
