import mongoose from "mongoose";

export const Repost = mongoose.model(
  "repost",
  new mongoose.Schema({
    date: { type: Date, default: () => new Date() },
    code: { type: String, required: true },
    postedBy: { type: mongoose.Schema.Types.ObjectId, required: true },
  })
);
