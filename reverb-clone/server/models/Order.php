<?php

class Order {
    private $db;
    private $collection;

    public function __construct($db, $collection) {
        $this->db = $db;
        $this->collection = $collection;
    }

    public function createOrder($user_id, $date, $total_price) {
        // Required fields validation
        if (empty($user_id) || empty($date) || empty($total_price)) {
            return 'All fields are required';
        }

        // Data type validation
        if (!is_string($user_id) || !is_string($date) || !is_numeric($total_price)) {
            return 'Invalid data type for one or more fields';
        }

        // Total price validation
        if ($total_price < 0) {
            return 'Total price must be a positive number';
        }

        // Create a new order document
        $order = [
            'user_id' => $user_id,
            'date' => $date,
            'total_price' => $total_price
        ];

        // Insert the order document into the 'orders' collection
        $result = $this->db->{$this->collection}->insertOne($order);

        // Return the result of the insert operation
        return ['success' => true, 'message' => 'Order created successfully', 'data' => $result];
    }

    public function getOrdersByUserId($user_id) {
        // Find order documents with the given user_id
        $orders = $this->db->{$this->collection}->find(['user_id' => $user_id])->toArray();

        if ($orders) {
            return ['success' => true, 'message' => 'Orders found', 'data' => $orders];
        } else {
            return ['success' => false, 'message' => 'No orders found'];
        }
    }
}
