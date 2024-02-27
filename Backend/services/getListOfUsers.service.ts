//TODO: TEMP FILE


import mongoose from "mongoose";
import User from "../models/user.model";

export const getAllUsers = async () => {
  return await User.find({});
}
