<?php

require_once '../models/Order.php';
require_once '../models/OrderItem.php';

class OrderController {
    private $orderModel;
    private $orderItemModel;

    public function __construct() {
        $this->orderModel = new OrderModel();
        $this->orderItemModel = new OrderItemModel();
    }

    public function createOrder($data) {
        $user_id = $data['user_id'];
        $date = $data['date'];
        $total_price = $data['total_price'];
        $orderItems = $data['orderItems'];
        $orderResult = $this->orderModel->create($user_id, $date, $total_price);
        if ($orderResult['success']) {
            $orderId = (string) $orderResult['data']->getInsertedId();
            foreach ($orderItems as $item) {
                $product_id = $item['product_id'];
                $quantity = $item['quantity'];
                $this->orderItemModel->create($orderId, $product_id, $quantity);
            }
        }
        return ['success' => true, 'message' => 'Order created successfully', 'data' => ['orderId' => $orderId]];
    }

    public function getOrders() {
        return $this->orderModel->findAll();
    }

    public function getOrderById($id) {
        return ['order' => $this->orderModel->findById($id), 'items' => $this->orderItemModel->findByOrderId($id)];
    }

    public function updateOrderById($id, $data) {
        return ['success' => false, 'message' => 'Updating orders is not supported'];
    }

    public function deleteOrderById($id) {
        return ['success' => false, 'message' => 'Deleting orders is not supported'];
    }
}
