<?php

require_once '../controllers/productController.php';

$productController = new ProductController();

// Create a new product
$app->post('/products', function ($request, $response) use ($productController) {
    $data = $request->getParsedBody();
    $result = $productController->createProduct($data);
    return $response->withJson($result);
});

// Get all products
$app->get('/products', function ($request, $response) use ($productController) {
    $result = $productController->getProducts();
    return $response->withJson($result);
});

// Get a product by id
$app->get('/products/{id}', function ($request, $response, $args) use ($productController) {
    $id = $args['id'];
    $result = $productController->getProductById($id);
    return $response->withJson($result);
});

// Update a product by id
$app->put('/products/{id}', function ($request, $response, $args) use ($productController) {
    $id = $args['id'];
    $data = $request->getParsedBody();
    $result = $productController->updateProductById($id, $data);
    return $response->withJson($result);
});

// Delete a product by id
$app->delete('/products/{id}', function ($request, $response, $args) use ($productController) {
    $id = $args['id'];
    $result = $productController->deleteProductById($id);
    return $response->withJson($result);
});
