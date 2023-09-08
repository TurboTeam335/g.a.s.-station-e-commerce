<?php

require_once '../models/userModel.php';

class UserController {
    private $userModel;

    public function __construct() {
        $this->userModel = new UserModel();
    }

    public function createUser($data) {
        $username = $data['username'];
        $email = $data['email'];
        $password = $data['password'];
        $location = $data['location'];
        return $this->userModel->create($username, $email, $password, $location);
    }

    public function getUserById($id) {
        return $this->userModel->findById($id);
    }

    public function updateUserById($id, $data) {
        return $this->userModel->updateById($id, $data);
    }

    public function deleteUserById($id) {
        return $this->userModel->deleteById($id);
    }
}
