<?php

class Product {
    private $db;
    private $collection;

    public function __construct($db, $collection) {
        $this->db = $db;
        $this->collection = $collection;
    }

    public function createProduct($user_id, $type, $subcategory, $name, $description, $price) {
        // Required fields validation
        if (empty($user_id) || empty($type) || empty($subcategory) || empty($name) || empty($description) || empty($price)) {
            return 'All fields are required';
        }

        // Data type validation
        if (!is_string($user_id) || !is_string($type) || !is_string($subcategory) || !is_string($name) || !is_string($description) || !is_numeric($price)) {
            return 'Invalid data type for one or more fields';
        }

        // Price validation
        if ($price < 0) {
            return 'Price must be a positive number';
        }

        // Create a new product document
        $product = [
            'user_id' => $user_id,
            'type' => $type,
            'subcategory' => $subcategory,
            'name' => $name,
            'description' => $description,
            'price' => $price
        ];

        // Insert the product document into the 'products' collection
        $result = $this->db->{$this->collection}->insertOne($product);

        // Return the result of the insert operation
        return ['success' => true, 'message' => 'Product created successfully', 'data' => $result];
    }

    public function getProductsByTypeAndSubcategory($type, $subcategory) {
        // Find product documents with the given type and subcategory
        $products = $this->db->{$this->collection}->find(['type' => $type, 'subcategory' => $subcategory])->toArray();

        if ($products) {
            return ['success' => true, 'message' => 'Products found', 'data' => $products];
        } else {
            return ['success' => false, 'message' => 'No products found'];
        }
    }
}
