const express = require('express');
const UserController = require('../controllers/UserController'); 

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const result = await UserController.getAllUsers();
  res.status(200).json(result);
});

// Get a user by id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await UserController.getUserById(id);
  res.status(200).json(result);
});

// Create a new user
router.post('/', async (req, res) => {
  const data = req.body;
  const result = await UserController.createUser(data);
  res.status(201).json(result);
});

// Update a user by id
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const result = await UserController.updateUserById(id, data);
  res.status(200).json(result);
});

// Delete a user by id
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const result = await UserController.deleteUserById(id);
  res.status(204).json(result);
});

module.exports = router;

