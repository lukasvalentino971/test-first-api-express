const User = require("../models/user");
const bcrypt = require('bcrypt');

async function createUser(req, res) {
  const userData = req.body;

  try {
    // const newUser = await User.create(userData);

    // console.log("Inserted User:", newUser);

    userData['password'] = await bcrypt.hash(userData.password, 10)
    const newUser = await User.create(userData);
    console.log("Inserted User:", newUser);
    res.json(newUser);
  } catch (error) {
    console.log("Error Inserting User:", error);
    res.status(500).json({ error });
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.findAll();

    console.log("Retrived Users :", users);

    res.json(users);
  } catch (error) {
    console.log("Error Retriving Users :", error);
  }
}

async function updateUser(req, res) {
  const userId = req.params.id;
  const updatedUserData = req.body;

  try {
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update user data
    await user.update(updatedUserData);

    console.log("Updated User:", user);

    res.json(user);
  } catch (error) {
    console.log("Error Updating User:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function destroyUser(req, res) {
  const userId = req.params.id; 

  try {
    // Find the user by ID
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete the user
    await user.destroy();

    console.log("Deleted User:", user);

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.log("Error Deleting User:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  destroyUser,
};