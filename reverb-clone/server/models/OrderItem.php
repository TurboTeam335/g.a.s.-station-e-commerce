<?php

class OrderItem {
    private $db;
    private $collection;

    public function __construct($db, $collection) {
        $this->db = $db;
        $this->collection = $collection;
    }

    public function createOrderItem($order_id, $product_id, $quantity) {
        // Required fields validation
        if (empty($order_id) || empty($product_id) || empty($quantity)) {
            return 'All fields are required';
        }

        // Data type validation
        if (!is_string($order_id) || !is_string($product_id) || !is_numeric($quantity)) {
            return 'Invalid data type for one or more fields';
        }

        // Quantity validation
        if ($quantity < 1) {
            return 'Quantity must be at least 1';
        }

        // Create a new order item document
        $orderItem = [
            'order_id' => $order_id,
            'product_id' => $product_id,
            'quantity' => $quantity
        ];

        // Insert the order item document into the 'orderItems' collection
        $result = $this->db->{$this->collection}->insertOne($orderItem);

        // Return the result of the insert operation
        return ['success' => true, 'message' => 'Order item created successfully', 'data' => $result];
    }

    public function getOrderItemsByOrderId($order_id) {
        // Find order item documents with the given order_id
        $orderItems = $this->db->{$this->collection}->find(['order_id' => $order_id])->toArray();

        if ($orderItems) {
            return ['success' => true, 'message' => 'Order items found', 'data' => $orderItems];
        } else {
            return ['success' => false, 'message' => 'No order items found'];
        }
    }
}
