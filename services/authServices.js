import bcrypt from "bcrypt";

import User from "../models/User.js";

export const findUser = (filter) => User.findOne(filter);

export const signup = async (data) => {
  const hashPasword = await bcrypt.hash(data.password, 10);
  return User.create({ ...data, password: hashPasword });
};

export const validatePassword = (password, hashPasword) =>
  bcrypt.compare(password, hashPasword);
