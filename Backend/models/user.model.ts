import mongoose from "mongoose";

//TODO: check password formats (need to encrypt)

const userSchema = new mongoose.Schema({
  //TODO: uniqueIdentity: UUID = 

  name: { type: String, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  password: { type: String, required: true },

  githubLink: { type: String, required: false },
  lastLogin: { type: Date, required: false }, //TODO: Check this 

})

const User = mongoose.model('User', userSchema);

export default User;
