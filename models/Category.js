import mongoose from "mongoose";

export const Category = mongoose.model(
  "category",
  new mongoose.Schema({
    name: { type: String, required: true },
    usersToGetFollowersFrom: { type: Array, required: true },
    usersToRepostFrom: { type: Array, required: true },
    captions: { type: Array, required: true },
    hashtags: { type: Array },
  })
);
