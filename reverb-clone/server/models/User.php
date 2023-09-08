<?php

class User {
    private $db;
    private $collection;

    public function __construct($db, $collection) {
        $this->db = $db;
        $this->collection = $collection;
    
      // Create an index on the 'username' field
        $this->db->{$this->collection}->createIndex(['username' => 1]);
    }


    public function createUser($user_id, $username, $email, $password, $location) {
        try {
        // Required fields validation
        if (empty($username) || empty($email) || empty($password) || empty($location)) {
            return 'All fields are required';
        }

        // Data type validation (for example, you might want to ensure location is a string)
        if (!is_string($location)) {
            return 'Invalid data type for location';
        }

        // Email format validation
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return 'Invalid email format';
        }

        // Password length validation
        if (strlen($password) < 8) {
            return 'Password should be at least 8 characters long';
        }

      // hash the password before storing it in the database
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

      // create a new user document
        $user = [
            'user_id' => $user_id,  // your custom unique ID
            'username' => $username,
            'email' => $email,
            'password' => $hashedPassword,
            'location' => $location
        ];

      // Check for username uniqueness (assuming `username` is indexed)
        $existingUser = $this->getUserByUsername($username);
        if ($existingUser) {
            return 'Username already exists';
        }

      // insert the user document into the 'users' collection
        $result = $this->db->{$this->collection}->insertOne($user);
  
      // return the result of the insert operation
        return ['success' => true, 'message' => 'User created successfully', 'data' => $result];

    } catch (Exception $e) {
        // log the exception or handle it as needed
        error_log($e->getMessage());

        // return a generic error message (or a more specific one based on the exception)
        return ['success' => false, 'message' => 'An error occurred while creating the user'];
    }
}

public function getUserByUsername($username) {
  // find a user document with the given username
    $user = $this->db->{$this->collection}->findOne(['username' => $username]);

  if ($user) {
      return ['success' => true, 'message' => 'User found', 'data' => $user];
  } else {
      return ['success' => false, 'message' => 'User not found'];
  }
}

public function verifyPassword($username, $password) {
    // find the user document with the given username
    $user = $this->getUserByUsername($username);

    // if the user was not found, return false
    if (!$user) {
        return ['success' => false, 'message' => 'User not found'];
    }

    // verify the given password against the hashed password stored in the database
    $isVerified = password_verify($password, $user['password']);

    if ($isVerified) {
        return ['success' => true, 'message' => 'Password verified'];
    } else {
        return ['success' => false, 'message' => 'Invalid password'];
    }
}
}

