import mongoose from "mongoose";

export const Abonnement = mongoose.model(
  "abonnement",
  new mongoose.Schema({
    date: { type: Date, default: () => new Date() },
    followedBy: { type: mongoose.Schema.Types.ObjectId, required: true },
    active: { type: Boolean, default: true },
    userId: { type: String, required: true },
    followedBack: { type: Boolean, default: null },
  })
);
