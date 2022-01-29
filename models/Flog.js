import mongoose from "mongoose";

export const Flog = mongoose.model(
  "flog",
  new mongoose.Schema({
    type: { type: String, required: true },
    content: { type: String },
    account: { type: mongoose.Schema.Types.ObjectId },
    createdAt: { type: Date, expires: 3600, default: Date.now }, // doc expires after 1 hour
  })
);
