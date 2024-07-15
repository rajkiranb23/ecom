const mongoose = require("mongoose");

const Connection = async () => {
  // const URL = `mongodb+srv://${username}:${password}@ecom.kaxugbr.mongodb.net/?retryWrites=true&w=majority&appName=Ecom`;

  const URL =
    "mongodb+srv://brainyidiot:rkb23@cluster0.b5eumig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  try {
    await mongoose.connect(URL);
    console.log("Database Connect successfully");
  } catch (error) {
    console.log("Error while connecting Db", error);
  }
};

module.exports = Connection;
