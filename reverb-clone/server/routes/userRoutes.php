<?php

require_once '../controllers/UserController.php';

$userController = new UserController();

// Group user-related routes
$app->group('/users', function () use ($userController) {

    // Get all users
    $this->get('', function ($request, $response) use ($userController) {
        $result = $userController->getAllUsers();
        return $response->withJson($result, 200); // HTTP 200 OK
    });

    // Get a user by id
    $this->get('/{id}', function ($request, $response, $args) use ($userController) {
        $id = $args['id'];
        $result = $userController->getUserById($id);
        return $response->withJson($result, 200); // HTTP 200 OK
    });
    
    // Create a new user
    $this->post('', function ($request, $response) use ($userController) {
        $data = $request->getParsedBody();
        $result = $userController->createUser($data);
        return $response->withJson($result, 201); // HTTP 201 Created
    });

    // Update a user by id
    $this->put('/{id}', function ($request, $response, $args) use ($userController) {
        $id = $args['id'];
        $data = $request->getParsedBody();
        $result = $userController->updateUserById($id, $data);
        return $response->withJson($result, 200); // HTTP 200 OK
    });

    // Delete a user by id
    $this->delete('/{id}', function ($request, $response, $args) use ($userController) {
        $id = $args['id'];
        $result = $userController->deleteUserById($id);
        return $response->withJson($result, 204); // HTTP 204 No Content

    });

});
