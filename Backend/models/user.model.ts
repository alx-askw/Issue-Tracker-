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


  currentlyAssignedTasks: [{
    id: { type: String, required: true },
    //TODO: More ID to go here
  }],

  //TODO: Maybe this should go in its own DB
  permissions: { type: String, required: true }
})

const User = mongoose.model('User', userSchema);

export default User;
