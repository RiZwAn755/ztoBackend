import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  phone: String,
  email: String,
  password: String,
});

export default mongoose.model("Student", studentSchema);