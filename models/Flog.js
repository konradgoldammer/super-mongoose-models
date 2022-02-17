import mongoose from "mongoose";

export const Flog = mongoose.model(
  "flog",
  new mongoose.Schema({
    type: { type: String, required: true },
    account: { type: mongoose.Schema.Types.ObjectId },
    followFrequency: { type: String, required: true },
    createdAt: { type: Date, expires: 345600, default: Date.now }, // doc expires after 4 days
  })
);
