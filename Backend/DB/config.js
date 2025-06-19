const mongoose = require("mongoose");
const dotenv = require("dotenv");
const URL = process.env.MONGO_URL;

mongoose.connect(URL);

export default mongoose;