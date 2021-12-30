const mongoose = require("mongoose");
const config = require("config");
const mongoURI = config.get("mongoURI");

const connect = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connect;
