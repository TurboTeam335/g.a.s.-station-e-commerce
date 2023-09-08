<?php

require_once '../controllers/productController.php';

$productController = new ProductController();

$app->group('/products', function () use ($productController) {

    
    // Get all products
    $this->get('', function ($request, $response) use ($productController) {
        $result = $productController->getProducts();
        return $response->withJson($result, 200);
    });
    
    // Get a product by id
    $this->get('/{id}', function ($request, $response, $args) use ($productController) {
        $id = $args['id'];
        $result = $productController->getProductById($id);
        return $response->withJson($result, 200);
    });
    
    // Create a new product
    $this->post('', function ($request, $response) use ($productController) {
        $data = $request->getParsedBody();
        $result = $productController->createProduct($data);
        return $response->withJson($result, 201);
    });
    
    // Update a product by id
    $this->put('/{id}', function ($request, $response, $args) use ($productController) {
        $id = $args['id'];
        $data = $request->getParsedBody();
        $result = $productController->updateProductById($id, $data);
        return $response->withJson($result, 200);
    });
    
    // Delete a product by id
    $this->delete('/{id}', function ($request, $response, $args) use ($productController) {
        $id = $args['id'];
        $result = $productController->deleteProductById($id);
        return $response->withJson($result, 204);
    });
});
    