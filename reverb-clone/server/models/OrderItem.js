const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema(
  {
    order_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number,
  },
  { timestamps: true }
);

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

class OrderItemModel {
  async getAllOrderItems() {
    try {
      return await OrderItem.find().populate('order_id').populate('product_id');
    } catch (err) {
      throw new Error('Failed to get all order items');
    }
  }

  async getOrderItemById(id) {
    try {
      return await OrderItem.findById(id).populate('order_id').populate('product_id');
    } catch (err) {
      throw new Error(`Failed to get order item by id: ${id}`);
    }
  }

  async createOrderItem(data) {
    try {
      const newOrderItem = new OrderItem(data);
      return await newOrderItem.save();
    } catch (err) {
      throw new Error('Failed to create new order item');
    }
  }

  async updateOrderItemById(id, data) {
    try {
      return await OrderItem.findByIdAndUpdate(id, data, { new: true });
    } catch (err) {
      throw new Error(`Failed to update order item by id: ${id}`);
    }
  }

  async deleteOrderItemById(id) {
    try {
      return await OrderItem.findByIdAndDelete(id);
    } catch (err) {
      throw new Error(`Failed to delete order item by id: ${id}`);
    }
  }
}

module.exports = new OrderItemModel();
