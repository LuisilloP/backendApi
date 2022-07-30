const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://LuisAraya:Paralelepipedo007@Pruebas.shep64a.mongodb.net/Pruebas?retryWrites=true&w=majority";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("todo bien en BD"))
    .catch((error) => console.error(error));
};
module.exports = db;
