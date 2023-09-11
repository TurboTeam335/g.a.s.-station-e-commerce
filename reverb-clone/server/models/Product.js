const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: String,
    subcategory: String,
    name: String,
    description: String,
    price: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

class ProductModel {

 

  async getAllProducts() {
  try{
    const products = await Product.find({});
    return {
      success: true,
      message: 'Products fetched successfully',
      data: products,
    };
  } catch (e) {
    console.error(e);
    return {
      success: false,
      message: 'An error occurred while fetching products',
    };
  }
}

  async getProductById(id) {
    try {
      const product = await Product.findById(id);
      if (product) {
        return { success: true, message: 'Product found', data: product };
      } else {
        return { success: false, message: 'Product not found' };
      }
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: 'An error occurred while finding the Product',
      };
    }
  }

  async createProduct(data) {
    if (!data.user_id || !data.type || !data.subcategory || !data.name || !data.description || data.price === undefined) {
      return {
        success: false,
        message: 'All fields are required',
      };
    }
    
    const product = new Product(data);
    try {
      const savedProduct = await product.save();
      return {
        success: true,
        message: 'Product saved successfully',
        data: savedProduct
      };
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: 'An error occurred while saving the product',
      };
    }
  }
  

  async updateProductById(id, data) {
    try {
      const product = await Product.findByIdAndUpdate(id, updateData, { new: true });
      if (product) {
        return { success: true, message: 'Product updated successfully', data: product };
      } else {
        return { success: false, message: 'Product not found' };
      }
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: 'An error occurred while updating the product',
      };
    }
  }

  async deleteProductById(id) {
    try {
      const result = await Product.findByIdAndDelete(id);
      if (result) {
        return { success: true, message: 'Product deleted successfully' };
      } else {
        return { success: false, message: 'Product not found' };
      }
    } catch (e) {
      console.error(e);
      return {
        success: false,
        message: 'An error occurred while deleting the product',
      };
    }
  }
}

module.exports = new ProductModel();
