import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastMessage: { type: String, default: "" },
    avatar: { type: String, default: "" },
    status: { type: String, enum: ["Online", "Offline"], default: "Offline" },
    type: { type: String, enum: ["Employee", "Investor"], default: "Employee" }
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);