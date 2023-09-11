const OrderModel = require('../models/Order');
const OrderItemModel = require('../models/OrderItem');

class OrderController {
  constructor() {
    this.orderModel = OrderModel;
    this.orderItemModel = OrderItemModel;
  }

  async getAllOrders() {
    return await this.orderModel.getAllOrders();
  }

  async getOrderById(id) {
    return await this.orderModel.getOrderById(id);
  }

  async createOrder(data) {
    return await this.orderModel.createOrder(data);
  }

  async updateOrderById(id, data) {
    return await this.orderModel.updateOrderById(id, data);
  }

  async deleteOrderById(id) {
    return await this.orderModel.deleteProductById(id);
  }

  async getAllOrderItems() {
    return await this.orderItemModel.getAllOrderItems();
  }

  async getOrderItemById(id) {
    return await this.orderItemModel.getOrderItemById(id);
  }

  async createOrderItem(data) {
    return await this.orderItemModel.createOrderItem(data);
  }

  async updateOrderItemById(id, data) {
    return await this.orderItemModel.updateOrderItemById(id, data);
  }

  async deleteOrderItemById(id) {
    return await this.orderItemModel.deleteOrderItemById(id);
  }

}

module.exports = new OrderController();
