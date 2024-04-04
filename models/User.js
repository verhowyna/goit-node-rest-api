import { Schema, model } from "mongoose";

import { handleSaveError, setUpdateSettings } from "./hooks.js";

import { emailRegexp, subscriptionList } from "../constants/user-constants.js";

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    match: emailRegexp,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: subscriptionList,
    default: "starter",
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  token: {
    type: String,
    default: null,
  },
  avatarURL: {
    type: String,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, "Verify token is required"],
  },
});

userSchema.post("save", handleSaveError);

userSchema.pre("findOneAndUpdate", setUpdateSettings);

userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;
