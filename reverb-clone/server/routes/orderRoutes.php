<?php

require_once '../controllers/orderController.php';

$orderController = new OrderController();

// Create a new order
$app->post('/orders', function ($request, $response) use ($orderController) {
    $data = $request->getParsedBody();
    $result = $orderController->createOrder($data);
    return $response->withJson($result);
});

// Get all orders
$app->get('/orders', function ($request, $response) use ($orderController) {
    $result = $orderController->getOrders();
    return $response->withJson($result);
});

// Get an order by id
$app->get('/orders/{id}', function ($request, $response, $args) use ($orderController) {
  $id = $args['id'];
  $result = $orderController->getOrderById($id);
  return $response->withJson($result);
});

// Update an order by id
$app->put('/orders/{id}', function ($request, $response, $args) use ($orderController) {
  $id = $args['id'];
  $data = $request->getParsedBody();
  $result = $orderController->updateOrderById($id, $data);
  return $response->withJson($result);
});

// Delete an order by id
$app->delete('/orders/{id}', function ($request, $response, $args) use ($orderController) {
    $id = $args['id'];
    $result = $orderController->deleteOrderById($id);
    return $response->withJson($result);
});
