import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female", ""], default: "" },
    idNumber: { type: String, default: "" },
    taxIdNumber: { type: String, default: "" },
    taxCountry: { type: String, default: "Bangladesh" },
    address: { type: String, default: "" },
    avatar: { type: String, default: "" }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);