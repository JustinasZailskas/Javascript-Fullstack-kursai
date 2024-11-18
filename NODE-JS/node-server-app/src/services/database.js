const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const uri = "mongodb://localhost/todoApp";
  try {
    await mongoose.connect(uri);
    console.log("Prisijungta prie duomenu bazes");
  } catch (error) {
    console.error("Klaida jungianties prie MongoDB");
    process.exit(1);
  }
};

module.exports = connectToDatabase;
