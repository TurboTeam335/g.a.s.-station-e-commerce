const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, default: Date.now },
    total_price: Number,
  },
  { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

class OrderModel {
  async getAllOrders() {
    try {
      return await Order.find().populate('user_id');
    } catch (err) {
      throw new Error('Failed to get all orders');
    }
  }

  async getOrderById(id) {
    try {
      return await Order.findById(id).populate('user_id');
    } catch (err) {
      throw new Error(`Failed to get order by id: ${id}`);
    }
  }

  async createOrder(data) {
    try {
      const newOrder = new Order(data);
      return await newOrder.save();
    } catch (err) {
      throw new Error('Failed to create new order');
    }
  }

  async updateOrderById(id, data) {
    try {
      return await Order.findByIdAndUpdate(id, data, { new: true });
    } catch (err) {
      throw new Error(`Failed to update order by id: ${id}`);
    }
  }

  async deleteOrderById(id) {
    try {
      return await Order.findByIdAndDelete(id);
    } catch (err) {
      throw new Error(`Failed to delete order by id: ${id}`);
    }
  }
}

module.exports = new OrderModel();
