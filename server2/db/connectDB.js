const mongoose = require("mongoose");

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "next-js-todo",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("connction Sucessfull");
  } catch (err) {
    console.log("error in connection", err);
  }
};
module.exports = connectDB;
