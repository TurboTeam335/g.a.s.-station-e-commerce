const OrderItemModel = require('../models/OrderItem');

class OrderItemController {
  constructor() {
    this.orderItemModel = OrderItemModel;
  }

  async getAllOrderItems(orderId) {
    return await this.orderItemModel.getAllOrderItems(orderId);
  }

  async getOrderItemById(id) {
    return await this.orderItemModel.getOrderItemById(id);
  }

  async createOrderItem(orderId, data) {
    return await this.orderItemModel.createOrderItem(orderId, data);
  }

  async updateOrderItemById(id, data) {
    return await this.orderItemModel.updateOrderItemById(id, data);
  }

  async deleteOrderItemById(id) {
    return await this.orderItemModel.deleteOrderItemById(id);
  }
}

module.exports = new OrderItemController();
