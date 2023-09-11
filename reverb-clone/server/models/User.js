const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Product = require('./Product');
const Order = require('./Order');
const OrderItem = require('./OrderItem');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String,
    location: String,
  },
  { timestamps: true }
);

// Indexes
userSchema.index({ username: 1 });

const User = mongoose.model('User', userSchema);

class UserModel {
  async createUser(user_id, username, email, password, location) {
    try {
      if (!username || !email || !password || !location) {
        return 'All fields are required';
      }

      if (typeof location !== 'string') {
        return 'Invalid data type for location';
      }

      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return 'Invalid email format';
      }

      if (password.length < 8) {
        return 'Password should be at least 8 characters long';
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user document
      const user = new User({
        user_id,
        username,
        email,
        password: hashedPassword,
        location,
      });

      const result = await user.save();
      return {
        success: true,
        message: 'User created successfully',
        data: result,
      };
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: 'An error occurred while creating the user',
      };
    }
  }

  async getAllUsers() {
    try {
      const users = await User.find({});
      return {
        success: true,
        message: 'Users fetched successfully',
        data: users,
      };
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: 'An error occurred while fetching users',
      };
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findById(id);
      const Product = mongoose.model('Product');
      const Order = mongoose.model('Order');
      const OrderItem = mongoose.model('OrderItem');
      const products = await Product.find({ user_id: id });
      const orders = await Order.find({ user_id: id });
      const orderIds = orders.map(order => order._id);
      const orderItems = await OrderItem.find({ order_id: { $in: orderIds } });
      
      if (user) {
        return {
          success: true,
          message: 'User found',
          data: { user, products, orders, orderItems },
        };
      } else {
        return { success: false, message: 'User not found' };
      }
    } catch (e) {
      console.error('Error:', e);
      return {
        success: false,
        message: 'An error occurred while finding the user',
      };
    }
  }

  async verifyPassword(username, password) {
    try {
      const user = await this.getUserByUsername(username);
      if (!user || !user.data) {
        return { success: false, message: 'User not found' };
      }

      const isVerified = await bcrypt.compare(password, user.data.password);
      if (isVerified) {
        return { success: true, message: 'Password verified' };
      } else {
        return { success: false, message: 'Invalid password' };
      }
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: 'An error occurred while verifying the password',
      };
    }
  }

  async updateUserById(id, updateData) {
    try {
      const user = await User.findByIdAndUpdate(id, updateData, { new: true });
      if (user) {
        return {
          success: true,
          message: 'User updated successfully',
          data: user,
        };
      } else {
        return { success: false, message: 'User not found' };
      }
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: 'An error occurred while updating the user',
      };
    }
  }

  async deleteUserById(id) {
    try {
      const result = await User.findByIdAndDelete(id);
      if (result) {
        return { success: true, message: 'User deleted successfully' };
      } else {
        return { success: false, message: 'User not found' };
      }
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: 'An error occurred while deleting the user',
      };
    }
  }
}

module.exports = new UserModel();
