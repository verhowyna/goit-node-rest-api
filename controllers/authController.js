import * as authServices from "../services/authServices.js";

import HttpError from "../helpers/HttpError.js";

const signup = async (req, res) => {
  const newUser = await authServices.signup(req.body);

  res.status(201).json({
    username: newUser.username,
    email: newUser.email,
  });
};

export default { signup };
