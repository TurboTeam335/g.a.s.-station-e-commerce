<?php

require_once '../controllers/userController.php';

$userController = new UserController();

// Create a new user
$app->post('/users', function ($request, $response) use ($userController) {
    $data = $request->getParsedBody();
    $result = $userController->createUser($data);
    return $response->withJson($result);
});

// Get a user by id
$app->get('/users/{id}', function ($request, $response, $args) use ($userController) {
    $id = $args['id'];
    $result = $userController->getUserById($id);
    return $response->withJson($result);
});

// Update a user by id
$app->put('/users/{id}', function ($request, $response, $args) use ($userController) {
    $id = $args['id'];
    $data = $request->getParsedBody();
    $result = $userController->updateUserById($id, $data);
    return $response->withJson($result);
});

// Delete a user by id
$app->delete('/users/{id}', function ($request, $response, $args) use ($userController) {
    $id = $args['id'];
    $result = $userController->deleteUserById($id);
    return $response->withJson($result);
});
