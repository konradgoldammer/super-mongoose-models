import mongoose from "mongoose";

export const Plog = mongoose.model(
  "plog",
  new mongoose.Schema({
    type: { type: String, required: true },
    message: { type: String },
    account: { type: mongoose.Schema.Types.ObjectId },
    createdAt: { type: Date, expires: 345600, default: Date.now }, // doc expires after 4 days
  })
);
