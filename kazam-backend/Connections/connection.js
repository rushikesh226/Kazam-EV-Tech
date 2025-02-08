const mongoose = require("mongoose");

const connection = async () => {
  try {
    const resp = await mongoose.connect(`${process.env.MONGO_URI}`);
    if (resp) {
      console.log("Connected to DB");
    }
  } catch (error) {
    console.log(error);
  }
};

connection();
