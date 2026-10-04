const User = require('../models/User');

// A MongoDB ID is a 24-character hex string
const isValidId = (id) => /^[0-9a-fA-F]{24}$/.test(id);

// @desc    Create a new user
// @route   POST /api/users
const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body || {};

    const user = await User.create({ name, email, password });

    res.status(201).json({
      message: 'User created successfully',
      user,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all users
// @route   GET /api/users
const getUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.status(200).json({
      count: users.length,
      users,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get a single user by ID
// @route   GET /api/users/:id
const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a user
// @route   PUT /api/users/:id
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    const { name, email, password } = req.body || {};

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    if (password !== undefined) user.password = password;

    await user.save();

    res.status(200).json({
      message: 'User updated successfully',
      user,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a user
// @route   DELETE /api/users/:id
const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!isValidId(id)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'User deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};