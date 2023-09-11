const express = require('express');
const OrderController = require('../controllers/OrderController');

const router = express.Router();

router.get('/', async (req, res) => {
  const orders = await OrderController.getAllOrders();
  res.json(orders);
});

router.get('/:id', async (req, res) => {
  const order = await OrderController.getOrderById(req.params.id);
  res.json(order);
});

router.post('/', async (req, res) => {
  const newOrder = await OrderController.createOrder(req.body);
  res.status(201).json(newOrder);
});

router.put('/:id', async (req, res) => {
  const updatedOrder = await OrderController.updateOrderById(req.params.id, req.body);
  res.json(updatedOrder);
});

router.delete('/:id', async (req, res) => {
  await OrderController.deleteOrderById(req.params.id);
  res.status(204).json({ message: 'Deleted successfully' });
  router.get('/:orderId/items', async (req, res) => {
  const orderItems = await OrderController.getAllOrderItems(req.params.orderId);
  res.json(orderItems);
});

router.get('/:orderId/items/:id', async (req, res) => {
  const orderItem = await OrderController.getOrderItemById(req.params.id);
  res.json(orderItem);
});

router.post('/:orderId/items', async (req, res) => {
  const newOrderItem = await OrderController.createOrderItem(req.body);
  res.status(201).json(newOrderItem);
});

router.put('/:orderId/items/:id', async (req, res) => {
  const updatedOrderItem = await OrderController.updateOrderItemById(req.params.id, req.body);
  res.json(updatedOrderItem);
});

router.delete('/:orderId/items/:id', async (req, res) => {
  await OrderController.deleteOrderItemById(req.params.id);
  res.status(204).json({ message: 'Deleted successfully' });
});

router.get('/:orderId/items', async (req, res) => {
  const orderItems = await OrderController.getAllOrderItems(req.params.orderId);
  res.json(orderItems);
});

router.get('/:orderId/items/:id', async (req, res) => {
  const orderItem = await OrderController.getOrderItemById(req.params.id);
  res.json(orderItem);
});

router.post('/:orderId/items', async (req, res) => {
  const newOrderItem = await OrderController.createOrderItem(req.body);
  res.status(201).json(newOrderItem);
});

router.put('/:orderId/items/:id', async (req, res) => {
  const updatedOrderItem = await OrderController.updateOrderItemById(req.params.id, req.body);
  res.json(updatedOrderItem);
});

router.delete('/:orderId/items/:id', async (req, res) => {
  await OrderController.deleteOrderItemById(req.params.id);
  res.status(204).json({ message: 'Deleted successfully' });
});
});

module.exports = router;
