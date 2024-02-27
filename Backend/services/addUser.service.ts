import User from "../models/user.model";

export const addUser = async (userObj: any) => {
  try {
    return User.create({
      name: userObj.name,
      userName: userObj.userName,
      userEmail: userObj.userEmail,
      password: userObj.password,
      permissions: userObj.permissions,
    })
  } catch (error) {
    console.log("MAJOR ERROR: " + error);
  }
}
