const express = require('express');
const ProductController = require('../controllers/ProductController');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductController.getAllProducts();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductController.getProductById(req.params.id);
  res.json(product);
});

router.post('/', async (req, res) => {
  const newProduct = await ProductController.createProduct(req.body);
  res.status(201).json(newProduct);
});

router.put('/:id', async (req, res) => {
  const updatedProduct = await ProductController.updateProductById(req.params.id, req.body);
  res.json(updatedProduct);
});

router.delete('/:id', async (req, res) => {
  await ProductController.deleteProductById(req.params.id);
  res.status(204).json({ message: 'Deleted successfully' });
});

module.exports = router;
