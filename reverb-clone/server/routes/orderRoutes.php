<?php

require_once '../controllers/orderController.php';

$orderController = new OrderController();

$app->group('/orders', function () use ($orderController) {

// Create a new order
$this->post('', function ($request, $response) use ($orderController) {
    $data = $request->getParsedBody();
    $result = $orderController->createOrder($data);
    return $response->withJson($result, 201);
});

// Get all orders
$this->get('', function ($request, $response) use ($orderController) {
    $result = $orderController->getOrders();
    return $response->withJson($result, 200);
});

// Get an order by id
$this->get('/{id}', function ($request, $response, $args) use ($orderController) {
  $id = $args['id'];
  $result = $orderController->getOrderById($id);
  return $response->withJson($result, 200);
});

// Update an order by id
$this->put('/{id}', function ($request, $response, $args) use ($orderController) {
  $id = $args['id'];
  $data = $request->getParsedBody();
  $result = $orderController->updateOrderById($id, $data);
  return $response->withJson($result, 200);
});

// Delete an order by id
$this->delete('/{id}', function ($request, $response, $args) use ($orderController) {
    $id = $args['id'];
    $result = $orderController->deleteOrderById($id);
    return $response->withJson($result, 204);
});
});