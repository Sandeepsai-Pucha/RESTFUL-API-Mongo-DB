const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;

const dbConnect = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Db Connected Succesfully");
  } catch (error) {
    console.log(`Error ${error}`);
  }
};

module.exports = dbConnect;
