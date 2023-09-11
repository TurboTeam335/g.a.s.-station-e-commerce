const ProductModel = require('../models/Product');

class ProductController {
  constructor() {
    this.productModel = ProductModel;
  }

  async getAllProducts() {
    return await this.productModel.getAllProducts();
  }

  async getProductById(id) {
    return await this.productModel.getProductById(id);
  }

  async createProduct(data) {
    return await this.productModel.createProduct(data);
  }

  async updateProductById(id, data) {
    return await this.productModel.updateProductById(id, data);
  }

  async deleteProductById(id) {
    return await this.productModel.deleteProductById(id);
  }
}

module.exports = new ProductController();
