import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    contactId: { type: mongoose.Schema.Types.ObjectId, ref: "Contact", required: true },
    sender: { type: String, enum: ["user", "contact"], required: true },
    text: { type: String, required: true },
    isWriting: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);