<?php

require_once '../models/productModel.php';

class ProductController {
    private $productModel;

    public function __construct() {
        $this->productModel = new ProductModel();
    }

    public function createProduct($data) {
        $user_id = $data['user_id'];
        $type = $data['type'];
        $subcategory = $data['subcategory'];
        $name = $data['name'];
        $description = $data['description'];
        $price = $data['price'];
        return $this->productModel->create($user_id, $type, $subcategory, $name, $description, $price);
    }

    public function getProducts() {
        return $this->productModel->findAll();
    }

    public function getProductById($id) {
        return $this->productModel->findById($id);
    }

    public function updateProductById($id, $data) {
        return $this->productModel->updateById($id, $data);
    }

    public function deleteProductById($id) {
        return $this->productModel->deleteById($id);
    }
}
