import User from "../models/User.js";

export const signup = (data) => User.create(data);
