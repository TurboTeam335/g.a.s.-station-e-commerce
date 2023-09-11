const UserModel = require('../models/User');
class UserController {
  constructor() {
    this.userModel = UserModel;
  }

  async getAllUsers() {
    return await this.userModel.getAllUsers();
  }

  async getUserById(id) {
    return await UserModel.getUserById(id);
  }

  createUser(data) {
    const { username, email, password, location } = data;
    return this.userModel.createUser(null, username, email, password, location);
  }

  async updateUserById(id, data) {
    return await this.userModel.updateUserById(id, data);
  }

  async deleteUserById(id) {
    return await UserModel.deleteUserById(id);
  }
}

module.exports = new UserController();
