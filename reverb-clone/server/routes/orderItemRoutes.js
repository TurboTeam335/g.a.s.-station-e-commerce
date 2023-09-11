const express = require('express');
const OrderItemController = require('../controllers/OrderItemController');

const router = express.Router();

router.get('/:orderId/items', async (req, res) => {
  const orderItems = await OrderItemController.getAllOrderItems(req.params.orderId);
  res.json(orderItems);
});

router.get('/:orderId/items/:id', async (req, res) => {
  const orderItem = await OrderItemController.getOrderItemById(req.params.id);
  res.json(orderItem);
});

router.post('/:orderId/items', async (req, res) => {
  const newOrderItem = await OrderItemController.createOrderItem(req.params.orderId, req.body);
  res.status(201).json(newOrderItem);
});

router.put('/:orderId/items/:id', async (req, res) => {
  const updatedOrderItem = await OrderItemController.updateOrderItemById(
    req.params.id,
    req.body
  );
  res.json(updatedOrderItem);
});

router.delete('/:orderId/items/:id', async (req, res) => {
  await OrderItemController.deleteOrderItemById(req.params.id);
  res.status(204).json({ message: 'Deleted successfully' });
});

module.exports = router;
