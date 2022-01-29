import mongoose from "mongoose";

export const Account = mongoose.model(
  "account",
  new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, required: true },
    follow: { type: Boolean, default: true },
    repost: { type: Boolean, default: true },
    unfollowOnly: { type: Boolean, default: false },
    followFrequency: { type: String, required: true },
    proxy: { ip: { type: String }, port: { type: Number } },
  })
);
